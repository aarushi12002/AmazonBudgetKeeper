
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getOrderSumOnPage,
  });
});


function getOrderSumOnPage() {
  console.log("Executing getOrder");
  x= document.getElementById("ordersContainer");
  y = x.getElementsByClassName("a-box-group a-spacing-base order js-order-card");
  let total = 0;
  for (let i = 0; i < y.length; i++) {
    console.log("child");
    z=y[i].getElementsByClassName("a-column a-span2 yohtmlc-order-total");
    u=z[0];
    m = u.outerText.split(/\r?\n/)[1].split('$')[1];
    console.log(m);
    total+= parseInt(m);
  }
  console.log("$" + total);
}