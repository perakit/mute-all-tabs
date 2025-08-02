// Mute all existing tabs when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.update(tab.id, { muted: true });
    });
  });
});

// Mute new tab when it's created
chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.update(tab.id, { muted: true });
});

// Mute all tabs when extension icon is clicked
chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.update(tab.id, { muted: true });
    });
  });
});