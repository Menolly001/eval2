let name1 = prompt("Joueur 1, veuillez entrer votre nom : ");
const player1 = document.querySelector("#player1");
player1.innerText = name1;

let name2 = prompt("Joueur 2, veuillez entrer votre nom : ");
const player2 = document.querySelector("#player2");
player2.innerText = name2;

let ButtonRollDice = document.querySelector("#rollDice");
// let dice = [1, 2, 3, 4, 5, 6];
let dice = document.querySelector(".dice")

let resultatScore = 0;
let randomDice;

let scoreRound1 = document.querySelector("#number1");
let scoreRound2 = document.querySelector("#number2");

ButtonRollDice.addEventListener("click", () => {
  randomDice = Math.floor(Math.random() * 7);
  console.log(randomDice);
  resultatScore += randomDice;
  scoreRound1.innerText = resultatScore;
});


const hold = document.querySelector("#hold");
const newGame = document.querySelector(".new-game");

const currentPlayer1 = document.querySelector("#currentPlayer1");
const currentPlayer2 = document.querySelector("#currentPlayer2");
