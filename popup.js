let userInput = document.getElementById("userinput");
userInput.addEventListener("input",(event) => changeMessage(event))

function changeMessage(event){
  message = event.target.value;
  console.log(message);
  params = {
    active:true,
    currentWindow:true
  }
  chrome.tabs.query(params,gotTab)

  function gotTab(tabs){
    chrome.tabs.sendMessage(tabs[0].id,message)
  }
}
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, { txt: "true" }, function(response) {
//     console.log(response);
//   });
// });