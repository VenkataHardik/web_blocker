document.getElementById('block').addEventListener('click', () => {
    const website = document.getElementById('website').value;
    if (website) {
      chrome.runtime.sendMessage({ type: 'blockWebsite', website }, (response) => {
        alert(response.status);
      });
    } else {
      alert('Please enter a website.');
    }
  });
  