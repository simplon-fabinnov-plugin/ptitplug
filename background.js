'use strict';

/*global chrome:false */
/*default_popup: "popup/choose_beast.html"*/
chrome.browserAction.setBadgeText({text: ''});
chrome.browserAction.setBadgeBackgroundColor({color: '#000066'});


chrome.browserAction.onClicked.addListener(function(aTab) {
  chrome.tabs.query({'title': 'BAMBOO SUCKERS'}, (tabs) => {
    if (tabs.length === 0) {
      // There is no catgif tab!
      chrome.tabs.create({'url': 'http://localhost/Bamboo/zer.php' , 'active': true});
    } else {
      // Do something here…
      chrome.tabs.query({'title': 'BAMBOO SUCKERS', 'active': true}, (active) => {
        if (active.length === 0) {
          chrome.tabs.update(tabs[0].id, {'active': true});
        }
      });
    }
  });
});
