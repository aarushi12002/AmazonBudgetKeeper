
let moneyPlaceholder = document.getElementById("money");

chrome.storage.sync.get("moneyAmount", function(result)  {
  moneyPlaceholder.innerHTML = result.moneyAmount;
  console.log(document.getElementById("money"));
});