function makeBold() {
  var textNodes = document.querySelectorAll("body *:not(script):not(style)");

  for (var i = 0; i < textNodes.length; i++) {2
    var words = textNodes[i].textContent.split(" ");

    for (var j = 0; j < words.length; j++) {
      var span = document.createElement("span");
      span.style.fontWeight = "bold";
      span.textContent = words[j];
      textNodes[i].replaceChild(span, textNodes[i].childNodes[j]);
    }
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "toggleBold") {
    makeBold();
  }
});
