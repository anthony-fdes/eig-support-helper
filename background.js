/**
* Open Tab Functions
*/
function openWhois(info, tab) {
  selectedText = info.selectionText;
  
  chrome.tabs.create({
    url: "https://www.whois.com/whois/" + selectedText
  });
}

function openIntoDNS(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://intodns.com/" + selectedText
  });
}

function openMXToolBox(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + selectedText + "&run=toolpage"
  });
}

/**
* Register All Menu Items
*/
var contextMenuWhois = chrome.contextMenus.create({
  "title": "Check Whois Details",
  "contexts":["selection"],
  "onclick": openWhois
});

var contextMenuIntoDNS = chrome.contextMenus.create({
  "title": "Check IntoDNS Details",
  "contexts":["selection"],
  "onclick": openIntoDNS
});

var contextMenuMXToolBox = chrome.contextMenus.create({
  "title": "Check MX Tool Box Details",
  "contexts":["selection"],
  "onclick": openMXToolBox
});
