
let moneyPlaceholder = document.getElementById("money");
let from = document.getElementById("From");
let to = document.getElementById("To");

chrome.storage.sync.get("moneyAmount", function(result)  {
  moneyPlaceholder.innerHTML = result.moneyAmount;
  console.log(document.getElementById("money"));
});

chrome.storage.sync.get("From", function(result)  {
  from.innerHTML = "From: " + result.To;
});

chrome.storage.sync.get("To", function(result)  {
  to.innerHTML = "To:" + result.From;
});