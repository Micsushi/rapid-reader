document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("toggleButton");

  button.addEventListener("click", function() {
    alert("Bold!");

    // Get all elements in the DOM
    const elements = document.getElementsByTagName("*");

    // Iterate through each element
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      // Apply modifications to the text content within the element
      applyBoldToFirstLetter(element);
    }
  });
});

// Function to apply bold style to the first letter of each word in the text content of an element
function applyBoldToFirstLetter(element) {
  const textContent = element.textContent;

  // Split the text content into words
  const words = textContent.split(" ");

  // Create a document fragment to hold the modified content
  const fragment = document.createDocumentFragment();

  // Iterate through each word and modify the first letter
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const modifiedWord = document.createElement("span");
    modifiedWord.style.fontWeight = "bold";
    modifiedWord.textContent = word.charAt(0) + word.slice(1);
    fragment.appendChild(modifiedWord);
    fragment.appendChild(document.createTextNode(" "));
  }

  // Replace the text content of the element with the modified content
  element.innerHTML = "";
  element.appendChild(fragment);
}
