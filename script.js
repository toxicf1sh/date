const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");

let clickCounter = 0;

const yesAnswerMethod = () => {
  window.location.href = 'about.html';
};

const noAnswerMethod = () => {
  no.style.position = 'absolute';

  let xPosition = Math.floor(Math.random() * container.clientWidth);
  let yPosition = Math.floor(Math.random() * container.clientHeight);

  no.style.top = `${yPosition}px`;
  no.style.left = `${xPosition}px`;

  clickCounter++;

  if (clickCounter > 4) {
    window.open('https://papertoilet.com', '_blank');
  }
};

no.addEventListener('click', noAnswerMethod);
yes.addEventListener('click', yesAnswerMethod);

document.getElementById("fix").addEventListener("click", function() {
  window.location = "https://www.instagram.com/toxicf1sh";
}, false);
