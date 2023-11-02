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

function updateDiceImage(randomDice) {
  let diceImage = document.getElementById("diceImage");
  let imagePath = `./images/dice-${randomDice}.png`;
  diceImage.src = imagePath;
}

buttonRollDice.addEventListener("click", () => {
  randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);

  updateDiceImage(randomDice);

  if (randomDice !== 1) {
    resultatScore += randomDice;
    if (playerActuel === 0) {
      scoreRound1.innerText = resultatScore;
      players[0].classList.add("active"); // a voir si on supprime
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

function updateActivePlayer() {
  const activePlayer = players[playerActuel];
  const inactivePlayer = players[playerActuel === 0 ? 1 : 0];

  activePlayer.classList.add("active-player");
  inactivePlayer.classList.remove("active-player");
}

function changePlayer() {
  playerActuel = playerActuel === 0 ? 1 : 0;
  updateActivePlayer();
}

updateActivePlayer();

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
  const victoryMessageContainer = document.getElementById("victoryMessageContainer");
  const victoryMessage = document.createElement("div");

  if (parseInt(currentPlayer1.innerText) >= 100) {
    victoryMessage.innerText = `${name1} a gagné ! 🏆`;
  } else if (parseInt(currentPlayer2.innerText) >= 100) {
    victoryMessage.innerText = `${name2} a gagné ! 🏆`;
  } else {
    return; // Aucun message de victoire à afficher
  }

  // Vous pouvez personnaliser le style du message ici
  victoryMessage.style.fontSize = "24px";
  victoryMessage.style.fontWeight = "bold";
  victoryMessage.style.color = "red";
  victoryMessage.style.textAlign = "center";

  // Effacez le contenu précédent du conteneur de message de victoire
  victoryMessageContainer.innerHTML = "";

  // Ajoutez le message de victoire au conteneur
  victoryMessageContainer.appendChild(victoryMessage);
}

let newGame = document.querySelector("#newGame");

newGame.addEventListener("click", resetGame);

function resetGame() {
  document.location.reload();
}
