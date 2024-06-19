let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessNumber");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastGuesses");
const loeOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preveGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid numer");
  } else if (guess < 1) {
    alert("please enter a valid numer");
  } else if (guess > 100) {
    alert("please enter a valid numer between 1 to 100");
  } else {
    preveGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // value is equal or high or low
  if (guess === randomNumber) {
    displayMessage("you won this match");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("number is too low");
  } else if (guess > randomNumber) {
    displayMessage("number is too high");
  }
}

function displayGuess(guess) {
  // update value on the input
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loeOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" style="background-color: darkorange; cursor: pointer; color: white; padding: 6px; border-radius: 4px; border: 2px solid black;">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber)
    preveGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage('')
    playGame = true;
  });
}
