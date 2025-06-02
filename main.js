const textArray = ["iOS Cert Seller", "Frontend Developer", "Script Lua Dev"];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typed-text");
let cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});
