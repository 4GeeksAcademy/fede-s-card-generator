/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ["Corazones", "Picas", "Treboles", "Diamantes"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generateCard() {
    let randomPalo = palo[Math.floor(Math.random() * palo.length)];
    let randomNumber = number[Math.floor(Math.random() * number.length)];

    let cardNumber = document.querySelector("#number");
    let cardImgPalo = document.querySelectorAll(".palo");

    let imgPalo = randomPalo => {
      switch (randomPalo) {
        case "Corazones":
          return "https://static.vecteezy.com/system/resources/previews/025/088/110/non_2x/illustration-of-heart-playing-card-symbol-vector.jpg";

        case "Picas":
          return "https://i.pinimg.com/1200x/7c/f8/0f/7cf80f36bdc3ad01b78d0a49e8533027.jpg";

        case "Treboles":
          return "https://upload.wikimedia.org/wikipedia/commons/8/8a/SuitClubs.svg";

        case "Diamantes":
          return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/SuitDiamonds.svg/640px-SuitDiamonds.svg.png";
      }
    };

    cardImgPalo.forEach(element => {
      element.src = imgPalo(randomPalo);
    });

    cardNumber.innerHTML = randomNumber;
  }

  document
    .getElementById("cardGenerator")
    .addEventListener("click", generateCard);

  generateCard();

  console.log("Hello Rigo from the console!");
};
