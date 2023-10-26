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
    if (playerActuel === 0) {
      scoreRound1.innerText = resultatScore;
    } else {
      scoreRound2.innerText = resultatScore;
    }
  } else {
    resultatScore = 0;
    scoreRound1.innerText = 0;
    scoreRound2.innerText = 0;
    changePlayer();
  }
});

let playerActuel = 0;
let players = [player1, player2];

function changePlayer() {
  playerActuel = playerActuel === 0 ? 1 : 0;
  players[0].classList.toggle("active");
  players[1].classList.toggle("active");
}
players[0].classList.add("active");

console.log(players[playerActuel]);

let buttonHold = document.querySelector("#hold");
let currentPlayer1 = document.querySelector("#currentPlayer1");
let currentPlayer2 = document.querySelector("#currentPlayer2");

let resultatRound1 = 0; // score du joueur 1
let resultatRound2 = 0; // score du joueur 2

buttonHold.addEventListener("click", () => {
  if (playerActuel === 0) {
    resultatRound1 += resultatScore;
    currentPlayer1.innerText = resultatRound1;
  } else {
    resultatRound2 += resultatScore;
    currentPlayer2.innerText = resultatRound2;
  }

  resultatScore = 0;
  scoreRound1.innerText = 0;
  scoreRound2.innerText = 0;

  changePlayer();
  gameOver();
});

function gameOver() {
  if (parseInt(currentPlayer1.innerText) >= 100) {
    alert(`Bravo, ${name1} tu as gagné !`);
  } else if (parseInt(currentPlayer2.innerText) >= 100) {
    alert(`Bravo, ${name2} tu as gagné !`);
  }
}

let newGame = document.querySelector("#newGame");

newGame.addEventListener("click", () => {
  resultatScore = 0;
  resultatRound1 = 0; // réénitialise le score du joueur 1
  resultatRound2 = 0; // réénitialise le score du joueur 2
  scoreRound1.innerText = 0;
  scoreRound2.innerText = 0;
  currentPlayer1.innerText = 0;
  currentPlayer2.innerText = 0;
  players[0].classList.add("active");
  players[1].classList.remove("active");
});
