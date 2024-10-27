// Background script to block websites
chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "*://www.example.com/*", // Change this to the website you want to block
          "resourceTypes": ["main_frame"]
        }
      }
    ],
    removeRuleIds: [1]
  });
  
  // Listen for changes from the popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "blockWebsite") {
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
          {
            "id": 1,
            "priority": 1,
            "action": { "type": "block" },
            "condition": {
              "urlFilter": `*://${message.website}/*`,
              "resourceTypes": ["main_frame"]
            }
          }
        ],
        removeRuleIds: [1]
      });
      sendResponse({ status: "Website blocked!" });
    }
  });
  