const texts = ["UI/UX Designer", "Web Developer", "Freelancer"];
const animatedText = document.getElementById("animatedText");
let currentIndex = 0;

function typeWriter() {
  const text = texts[currentIndex];
  let index = 0;
  animatedText.textContent = "";

  function type() {
    if (index < text.length) {
      animatedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 200);
    } else {
      setTimeout(changeText, 2000);
    }
  }

  type();
}

function changeText() {
  currentIndex = (currentIndex + 1) % texts.length;
  typeWriter();
}

changeText();
