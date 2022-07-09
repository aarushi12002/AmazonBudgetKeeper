let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener( function(tabId, info, tab) {
    console.log("hello " + tabId);
    console.log("hello 2" + info.status);
    console.log("Executing getOrder");
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: getOrderSumOnPage
      });
});


function getOrderSumOnPage() {
  console.log("Executing getOrder");
  x= document.getElementById("ordersContainer");
  y = x.getElementsByClassName("a-box-group a-spacing-base order js-order-card");
  let total = 0;
  for (let i = 0; i < y.length; i++) {
    z=y[i].getElementsByClassName("a-column a-span2 yohtmlc-order-total");
    u=z[0];
    m = u.outerText.split(/\r?\n/)[1].split('$')[1];
    total+= parseInt(m);
  }
  console.log("$" + total);
   chrome.storage.sync.set({'moneyAmount': total}, function() {
             console.log('Value is set');
   });

}