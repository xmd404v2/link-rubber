document.addEventListener('DOMContentLoaded', function() {
  const debugElement = document.getElementById('debug');
  
  function log(message) {
    console.log(message);
    if (debugElement) {
      debugElement.style.display = 'block';
      debugElement.innerHTML += message + '<br>';
    }
  }

  // Get the URL from the query string
  const urlParams = new URLSearchParams(window.location.search);
  const originalUrl = decodeURIComponent(urlParams.get('url') || '');
  const tabId = parseInt(urlParams.get('tabId') || '-1');
  
  log(`URL: ${originalUrl}`);
  log(`TabId: ${tabId}`);
  
  // Display original URL in both places
  const urlDisplayElements = document.querySelectorAll('#url-display, #url-display-result');
  urlDisplayElements.forEach(element => {
    if (element) {
      element.innerText = originalUrl.length > 50 ? originalUrl.substring(0, 50) + '...' : originalUrl;
      element.title = originalUrl; // Add full URL as tooltip
    }
  });
  
  // Handle "proceed" button click - direct navigation
  document.getElementById('proceed-btn').addEventListener('click', () => {
    log('Proceed clicked, approving URL and navigating');
    
    if (originalUrl) {
      // Mark this URL as approved first
      chrome.runtime.sendMessage({ type: 'APPROVE_URL', url: originalUrl }, (response) => {
        log('URL approved, navigating');
        // Then navigate to the URL
        window.location.href = originalUrl;
      });
    }
  });
  
  // Handle "cancel" button click
  document.getElementById('cancel-btn').addEventListener('click', () => {
    log('Cancel clicked, going back');
    // Try direct navigation back
    window.history.back();
  });

  // Automatically show verdict after delay
  setTimeout(() => {
    log('Showing verdict after timeout');
    document.getElementById('scanning').style.display = 'none';
    document.getElementById('verdict').classList.add('visible');
    document.getElementById('proceed-btn').focus();
  }, 2000);
}); 