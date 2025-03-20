import { SafetyVerdict } from '../types';

// Create variables to track our dialog elements
let safetyDialog: HTMLDivElement | null = null;
let currentVerdict: SafetyVerdict | null = null;

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SHOW_SAFETY_DIALOG') {
    const verdict: SafetyVerdict = message.payload;
    currentVerdict = verdict;
    showSafetyDialog(verdict);
    
    // Send a response to keep the message channel open
    sendResponse({ success: true });
  }
  
  if (message.type === 'HIDE_SAFETY_DIALOG') {
    hideSafetyDialog();
    
    // Send a response to keep the message channel open
    sendResponse({ success: true });
  }
  
  // Allow async response
  return true;
});

// Function to show the safety dialog
function showSafetyDialog(verdict: SafetyVerdict) {
  // If dialog already exists, remove it
  if (safetyDialog) {
    document.body.removeChild(safetyDialog);
  }
  
  // Create a new dialog
  safetyDialog = document.createElement('div');
  safetyDialog.className = 'link-rubber-dialog';
  
  // Apply styles to the dialog
  safetyDialog.style.position = 'fixed';
  safetyDialog.style.top = '50%';
  safetyDialog.style.left = '50%';
  safetyDialog.style.transform = 'translate(-50%, -50%)';
  safetyDialog.style.zIndex = '2147483647'; // Max z-index value
  safetyDialog.style.width = '400px';
  safetyDialog.style.padding = '20px';
  safetyDialog.style.backgroundColor = 'white';
  safetyDialog.style.borderRadius = '8px';
  safetyDialog.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  safetyDialog.style.fontFamily = 'Arial, sans-serif';
  
  // Create dialog content based on verdict
  let statusColor = '';
  let statusIcon = '';
  
  switch (verdict.status) {
    case 'Safe':
      statusColor = '#34D399'; // Green
      statusIcon = '✅';
      break;
    case 'Suspicious':
      statusColor = '#FBBF24'; // Yellow
      statusIcon = '⚠️';
      break;
    case 'Unsafe':
      statusColor = '#EF4444'; // Red
      statusIcon = '❌';
      break;
  }
  
  // Build dialog content
  safetyDialog.innerHTML = `
    <div style="text-align: center; margin-bottom: 16px;">
      <div style="font-size: 48px; margin-bottom: 8px;">${statusIcon}</div>
      <h2 style="margin: 0; color: ${statusColor}; font-size: 24px; font-weight: 600;">${verdict.status}</h2>
      <p style="margin: 8px 0 0; font-size: 14px; color: #6B7280;">
        ${verdict.url}
      </p>
    </div>
    <div style="margin-bottom: 24px;">
      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #374151;">
        ${verdict.details || ''}
      </p>
    </div>
    <div style="display: flex; justify-content: space-between; gap: 12px;">
      <button id="cancel-navigation" style="
        flex: ${verdict.status === 'Safe' ? '0.4' : '1'};
        padding: 8px 16px;
        background-color: #F3F4F6;
        color: #374151;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      ">Cancel</button>
      <button id="proceed-navigation" style="
        flex: ${verdict.status === 'Safe' ? '1.6' : '1'};
        padding: ${verdict.status === 'Safe' ? '12px 16px' : '8px 16px'};
        background-color: ${statusColor};
        color: white;
        border: none;
        border-radius: 4px;
        font-size: ${verdict.status === 'Safe' ? '18px' : '16px'};
        font-weight: ${verdict.status === 'Safe' ? '600' : '500'};
        cursor: pointer;
        box-shadow: ${verdict.status === 'Safe' ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none'};
      ">Proceed</button>
    </div>
  `;
  
  // Add dialog to page
  document.body.appendChild(safetyDialog);
  
  // Add event listeners to buttons
  const cancelButton = document.getElementById('cancel-navigation');
  const proceedButton = document.getElementById('proceed-navigation') as HTMLButtonElement | null;
  
  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      if (currentVerdict) {
        chrome.runtime.sendMessage({
          type: 'CANCEL_NAVIGATION',
          payload: {
            url: currentVerdict.url,
            tabId: chrome.runtime.sendMessage({
              type: 'GET_TAB_ID'
            }, (response) => {
              return response.tabId;
            })
          }
        });
      }
      
      hideSafetyDialog();
    });
  }
  
  if (proceedButton) {
    proceedButton.addEventListener('click', () => {
      if (currentVerdict) {
        chrome.runtime.sendMessage({
          type: 'PROCEED_NAVIGATION',
          payload: {
            url: currentVerdict.url,
            tabId: chrome.runtime.sendMessage({
              type: 'GET_TAB_ID'
            }, (response) => {
              return response.tabId;
            })
          }
        });
      }
      
      hideSafetyDialog();
    });
    
    // Auto-focus the proceed button for safe URLs
    if (verdict.status === 'Safe') {
      proceedButton.focus();
    }
  }
}

// Function to hide the safety dialog
function hideSafetyDialog() {
  if (safetyDialog && safetyDialog.parentNode) {
    safetyDialog.parentNode.removeChild(safetyDialog);
    safetyDialog = null;
    currentVerdict = null;
  }
} 