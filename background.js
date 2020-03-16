/**
* Check IDs (Regex)
*/

function isSession(id) {
  return id.match(/[a-zA-Z0-9]{40}/);
}

function isUser(id) {
  return id.match(/\d{1,10}/);
}

function isGroup(id) {
  return id.match(/\d{1,10}/);
}

function isEmail(email) {
  return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

/**
* Open Tab Functions
*/
function openAutomateSessionDetails(info, tab) {
  selectedText = info.selectionText;
  
  if(!isSession(selectedText)) return;
  
  chrome.tabs.create({
    url: "https://www.browserstack.com/admin/automate_usage?query=" + selectedText + "&session_type=all&submit=Submit"
  });
}

function openAppAutomateSessionDetails(info, tab) {
  selectedText = info.selectionText;
  
  if(!isSession(selectedText)) return;
  
  chrome.tabs.create({
    url: "https://www.browserstack.com/admin/automate_usage?query=" + selectedText + "&session_type=all&app_automate=on&submit=Submit"
  });
}

function openHyperdriveDetails(info, tab) {
  selectedText = info.selectionText;
  
  if(!isSession(selectedText)) return;
  
  chrome.tabs.create({
    url: "https://hyperdrive.bsstag.com/local/search?session_id=" + selectedText
  });
}

function openUserDetails(info, tab) {
  selectedText = info.selectionText;
  
  if(isEmail(selectedText)) {
    chrome.tabs.create({
      url: "https://www.browserstack.com/admin/user_stats?q=" + selectedText + "&column_selected=Email&commit=Go"
    });
  }else if(isUser(selectedText)) {
    chrome.tabs.create({
      url: "https://www.browserstack.com/admin/user_stats?q=" + selectedText + "&column_selected=ID&commit=Go"
    });
  }
}

function openGroupDetails(info, tab) {
  selectedText = info.selectionText;
  
  if(!isGroup(selectedText)) return;
  
  chrome.tabs.create({
    url: "https://www.browserstack.com/admin/user_stats?q=" + selectedText + "&column_selected=Group_ID&commit=Go"
  });
}


// old code

function genericOnClick (info, tab) {
  selectedText = info.selectionText;
  if(selectedText.match(/[a-zA-Z0-9]{40}/)) {
    fetchSessionDetails(selectedText);
  }
  else if(selectedText.match(/\d{1,10}/)) {
    fetchUserDetails(selectedText);
  }
}

function genericOnClickHyperdrive (info, tab) {
  selectedText = info.selectionText;
  if(selectedText.match(/[a-zA-Z0-9]{40}/)) {
    fetchHyperDriveDetails(selectedText);
  }
}

function fetchSessionDetails (selectedText) {
  chrome.tabs.create({
    url: "https://www.browserstack.com/admin/automate_usage?query=" + selectedText + "&session_type=all&submit=Submit"
  });
}

function fetchHyperDriveDetails (selectedText) {
  chrome.tabs.create({
    url: "https://hyperdrive.bsstag.com/local/search?session_id=" + selectedText
  });
}

function fetchUserDetails (selectedText) {
  chrome.tabs.create({
    url: "https://www.browserstack.com/admin/user_stats?q=" + selectedText + "&column_selected=ID&commit=Go"
  });
}

function fetchGroupDetails (selectedText) {
  chrome.tabs.create({
    url: "https://www.browserstack.com/admin/user_stats?q=" + selectedText + "&column_selected=Group_ID&commit=Go"
  });
}

// -- end of old code


/**
* Register All Menu Items
*/
var contextMenuAutomate = chrome.contextMenus.create({
  "title": "Automate Session Details",
  "contexts":["selection"],
  "onclick": openAutomateSessionDetails
});

var contextMenuAppAutomate = chrome.contextMenus.create({
  "title": "App Automate Session Details",
  "contexts":["selection"],
  "onclick": openAppAutomateSessionDetails
});

var contextMenuHyperdrive = chrome.contextMenus.create({
  "title": "Hyperdrive Details",
  "contexts":["selection"],
  "onclick": openHyperdriveDetails
});

var contextMenuUser = chrome.contextMenus.create({
  "title": "User Details",
  "contexts":["selection"],
  "onclick": openUserDetails
});

//var contextMenuGroup = chrome.contextMenus.create({
//  "title": "Group Details",
//  "contexts":["selection"],
//  "onclick": openGroupDetails
//});
