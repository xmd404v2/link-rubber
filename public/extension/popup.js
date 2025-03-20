document.addEventListener('DOMContentLoaded', function() {
  // Load recent verdicts from storage
  loadRecentVerdicts();
  
  // Add event listener to settings button
  document.getElementById('settings-btn').addEventListener('click', function() {
    // Open the dashboard page in a new tab
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
  });
});

// Function to load recent verdicts from storage
function loadRecentVerdicts() {
  chrome.storage.local.get(null, function(items) {
    const historyList = document.getElementById('history-list');
    
    // Clear existing content
    historyList.innerHTML = '';
    
    // Find all verdict items
    const verdicts = [];
    for (const key in items) {
      if (key.startsWith('verdict-')) {
        verdicts.push(items[key]);
      }
    }
    
    // Sort by timestamp (most recent first)
    verdicts.sort((a, b) => b.timestamp - a.timestamp);
    
    // Display up to 10 most recent verdicts
    const recentVerdicts = verdicts.slice(0, 10);
    
    if (recentVerdicts.length === 0) {
      // No history yet
      historyList.innerHTML = '<div class="history-item"><div class="history-url">No recent checks.</div></div>';
      return;
    }
    
    // Add each verdict to the list
    for (const verdict of recentVerdicts) {
      const item = document.createElement('div');
      item.className = 'history-item';
      
      // Determine status class and icon
      let statusClass = 'status-safe';
      let statusIcon = '✓';
      
      switch (verdict.status) {
        case 'Safe':
          statusClass = 'status-safe';
          statusIcon = '✓';
          break;
        case 'Suspicious':
          statusClass = 'status-suspicious';
          statusIcon = '!';
          break;
        case 'Unsafe':
          statusClass = 'status-unsafe';
          statusIcon = '✕';
          break;
      }
      
      // Create HTML
      item.innerHTML = `
        <div class="status-icon ${statusClass}">${statusIcon}</div>
        <div class="history-url" title="${verdict.url}">${verdict.url}</div>
      `;
      
      // Add tooltip with details on hover
      item.setAttribute('title', `${verdict.status}: ${verdict.details || 'No details'}`);
      
      // Add to list
      historyList.appendChild(item);
    }
  });
} 