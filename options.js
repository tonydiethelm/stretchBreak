// Saves options to chrome.storage
function save_minutes() {
    var minutes = document.getElementById('minutes').value;
    
    chrome.storage.local.set({
      'minutesDesired': minutes,
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Minutes requested saved.';
    });
  }

chrome.storage.local.get('minutesDesired', (data) => {'options script, did I get the minutes?', console.log(data)});

  document.getElementById('save').addEventListener('click', save_minutes);