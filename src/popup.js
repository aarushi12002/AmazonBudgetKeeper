
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getOrder,
  });
});


function getOrder() {
  console.log("Executing getOrder");
  x= document.getElementById("ordersContainer");
  y = x.getElementsByClassName("a-box-group a-spacing-base order js-order-card");
  console.log(y);
}