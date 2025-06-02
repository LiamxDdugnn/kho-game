const typedText = document.getElementById("typed-text");
const words = ["developer", "automation expert", "Esign bypass coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const word = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent = word.slice(0, charIndex);

  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
