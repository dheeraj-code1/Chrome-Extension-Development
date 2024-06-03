console.log("hi_extension");
flag = true;
let originalProperties = [];
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log(request);
  let paragraphs = document.getElementsByTagName("p");

  for(ele of paragraphs){
    ele.innerHTML = request
  }

  
if (request == "true") {
  sendResponse({ ok: "ok" });

  let paragraphs = document.getElementsByTagName("div");
  

  
  if (flag) {
    for (ele of paragraphs) {
      
      originalProperties.push({
        element: ele,
        fontFamily: ele.style["font-family"],
        fontWeight: ele.style["font-weight"],
        fontSize: ele.style["font-size"],
      });
      ele.style["font-family"] = "Cursive";
    }
    flag = false 
  }else{

    for (let prop of originalProperties) {
      prop.element.style["font-family"] = prop.fontFamily;
      // prop.element.style["font-weight"] = prop.fontWeight;
      // prop.element.style["font-size"] = prop.fontSize;
    }
    flag = true
  }
  console.log("xds1",flag);
}

});










