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

function openWhatsMyDnsARecord(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://www.whatsmydns.net/#A/" + selectedText
  });
}

function openWhatsMyDnsNSRecord(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://www.whatsmydns.net/#NS/" + selectedText
  });
}

function openWhatsMyDnsMXRecord(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://www.whatsmydns.net/#MX/" + selectedText
  });
}

function openWhatsMyDnsTXTRecord(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://www.whatsmydns.net/#TXT/" + selectedText
  });
}

function openWhatsMyDnsCNAMERecord(info, tab) {
  selectedText = info.selectionText;
    
  chrome.tabs.create({
    url: "https://www.whatsmydns.net/#CNAME/" + selectedText
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

var contextMenuWhatsMyDns = chrome.contextMenus.create({
  "title": "Check Whats My DNS Details",
  "id" : "parent",
  "contexts":["selection"]
});

var contextMenuARecord = chrome.contextMenus.create({
  "title": "Fetch the A Record",
  "parentId" : "parent",
  "contexts":["selection"],
  "onclick": openWhatsMyDnsARecord
});

var contextMenuARecord = chrome.contextMenus.create({
  "title": "Fetch the NS Record",
  "parentId" : "parent",
  "contexts":["selection"],
  "onclick": openWhatsMyDnsNSRecord
});

var contextMenuARecord = chrome.contextMenus.create({
  "title": "Fetch the MX Record",
  "parentId" : "parent",
  "contexts":["selection"],
  "onclick": openWhatsMyDnsMXRecord
});

var contextMenuARecord = chrome.contextMenus.create({
  "title": "Fetch the TXT Record",
  "parentId" : "parent",
  "contexts":["selection"],
  "onclick": openWhatsMyDnsTXTRecord
});

var contextMenuARecord = chrome.contextMenus.create({
  "title": "Fetch the CNAME Record",
  "parentId" : "parent",
  "contexts":["selection"],
  "onclick": openWhatsMyDnsCNAMERecord
});