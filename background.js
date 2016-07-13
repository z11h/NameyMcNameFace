chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.url && changeInfo.url.includes("signup.live.com/newuser.aspx")) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(tab.id, {file: "chance.min.js"}, () => {
        chrome.tabs.executeScript(tab.id, {file: "namey.js"}, ()=> {
            chrome.tabs.executeScript(tab.id, {code: "nameyMcNameFace();"});
        });
    });
});
