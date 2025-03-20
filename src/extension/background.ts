import { SafetyStatus, NavigationRequest, SafetyVerdict } from '../types';

// Store pending navigations
const pendingNavigations: Record<string, NavigationRequest> = {};

// Example API key - in a real application, this should be stored securely
// or fetched from a secure backend service
// This is not used in the MVP mock implementation but would be used in production
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const API_KEY = 'YOUR_URLSCAN_API_KEY';

// Check if a URL has been approved before
async function isApprovedUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    chrome.storage.local.get('approvedUrls', (result) => {
      const approvedUrls = result.approvedUrls || [];
      // Check if the URL or its domain is in the approved list
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      
      // Check exact URL match or domain match
      const isApproved = approvedUrls.some((item: string) => 
        item === url || item === domain || url.startsWith(item)
      );
      
      console.log(`URL ${url} approved: ${isApproved}`);
      resolve(isApproved);
    });
  });
}

// Add a URL to the approved list
function addApprovedUrl(url: string): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.get('approvedUrls', (result) => {
      const approvedUrls = result.approvedUrls || [];
      
      // Add the domain to the approved list
      try {
        const urlObj = new URL(url);
        const domain = urlObj.hostname;
        
        // Don't add duplicates
        if (!approvedUrls.includes(domain)) {
          approvedUrls.push(domain);
          chrome.storage.local.set({ approvedUrls }, () => {
            console.log(`Added ${domain} to approved list`);
            resolve();
          });
        } else {
          console.log(`${domain} already in approved list`);
          resolve();
        }
      } catch (e) {
        console.error('Error parsing URL:', e);
        resolve();
      }
    });
  });
}

// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  console.log('Navigation intercepted:', details.url);
  
  // Skip navigation to extension's own pages, chrome:// URLs, etc.
  if (details.url.startsWith('chrome://') || 
      details.url.startsWith('chrome-extension://') ||
      details.url.startsWith('about:') ||
      details.url.includes('extension/scanning.html')) {
    console.log('Skipping navigation for special URL:', details.url);
    return;
  }

  // Skip frames that aren't the main frame
  if (details.frameId !== 0) {
    console.log('Skipping non-main frame navigation');
    return;
  }

  // Check if this URL has been approved
  const approved = await isApprovedUrl(details.url);
  if (approved) {
    console.log('URL already approved, allowing navigation');
    return;
  }

  // Store the navigation request
  const navKey = `${details.tabId}-${details.url}`;
  pendingNavigations[navKey] = {
    url: details.url,
    tabId: details.tabId,
    frameId: details.frameId
  };

  console.log('Redirecting to scanning page with URL:', details.url);
  
  // Redirect to scanning page with URL as parameter
  const scanningUrl = `${chrome.runtime.getURL('extension/scanning.html')}?url=${encodeURIComponent(details.url)}&tabId=${details.tabId}`;
  chrome.tabs.update(details.tabId, { url: scanningUrl });
});

// Function to scan a URL for safety
async function scanUrl(url: string): Promise<SafetyVerdict> {
  try {
    // Add a delay of 2 seconds to simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Always return "Safe" status for the MVP
    return {
      url,
      status: 'Safe',
      details: `This URL has been checked and is safe to visit.`,
      timestamp: Date.now()
    };
  } catch (error) {
    console.error('Error scanning URL:', error);
    
    // Default to safe if there's an error
    return {
      url,
      status: 'Safe',
      details: 'Could not scan URL due to an error, but we\'re letting you proceed.',
      timestamp: Date.now()
    };
  }
}

// Listen for messages from the content script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PROCEED_NAVIGATION') {
    const { url, tabId } = message.payload;
    const navKey = `${tabId}-${url}`;
    
    // Clear the pending navigation
    if (pendingNavigations[navKey]) {
      delete pendingNavigations[navKey];
    }
    
    // Continue to the original URL
    chrome.tabs.update(tabId, { url });
  }
  
  if (message.type === 'CANCEL_NAVIGATION') {
    const { url, tabId } = message.payload;
    const navKey = `${tabId}-${url}`;
    
    // Clear the pending navigation
    if (pendingNavigations[navKey]) {
      delete pendingNavigations[navKey];
    }
    
    // Return to previous page or a safe page
    chrome.tabs.goBack(tabId);
  }
  
  if (message.type === 'APPROVE_URL') {
    const url = message.url;
    if (url) {
      addApprovedUrl(url).then(() => {
        sendResponse({ success: true });
      });
    }
    return true; // Keep channel open for async response
  }
  
  // Always respond to keep the message channel open
  sendResponse({ success: true });
  return true;
}); 