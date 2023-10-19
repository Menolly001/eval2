let name1 = prompt("Joueur 1, veuillez entrer votre nom : ");
const player1 = document.querySelector("#player1");
player1.innerText = name1;

let name2 = prompt("Joueur 2, veuillez entrer votre nom : ");
const player2 = document.querySelector("#player2");
player2.innerText = name2;

let buttonRollDice = document.querySelector("#rollDice");

let dice = document.querySelector(".dice");

let resultatScore = 0;
let randomDice;

let scoreRound1 = document.querySelector("#number1");
let scoreRound2 = document.querySelector("#number2");

buttonRollDice.addEventListener("click", () => {
  randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);

  if (randomDice !== 1) {
    resultatScore += randomDice;
    scoreRound1.innerText = resultatScore;
  } else {
    scoreRound2.innerText = resultatScore;
  }
  changePlayer();
});

let playerActuel = 0;
let players = [player1, player2];

function changePlayer() {
  playerActuel = playerActuel === 0 ? 1 : 0;
}

console.log(players[playerActuel]);

let buttonHold = document.querySelector("#hold");
let currentPlayer1 = document.querySelector("#currentPlayer1");

let resultatRound = 0;

buttonHold.addEventListener("click", () => {
  resultatRound += resultatScore;
  if (playerActuel === 0) {
    currentPlayer1.innerText = resultatRound;
  } else {
    currentPlayer2.innerText = resultatRound;
  }
  console.log(resultatRound);
});

let newGame = document.querySelector("#newGame");

newGame.addEventListener("click", () => {
  document.location.reload();
});

const currentPlayer2 = document.querySelector("#currentPlayer2");
