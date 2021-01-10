function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  // pick a game choice at random for computer to use (get number back between 0-2)
  const random = Math.floor(Math.random() * options.length);
  // return computer choice
  return options[random];
}

function playRound(playerChoice, computerChoice) {
  // play one round of rock, paper, scissors and determine winner
  const pChoice = playerChoice.toLowerCase();
  const cChoice = computerChoice.toLowerCase();
  let outcomeMessage = '';

  console.log(`Player choice: ${pChoice}`);
  console.log(`Computer choice: ${cChoice}`);

  // compare choices to see who wins round
  if (
    pChoice === 'rock' && cChoice === 'scissors' ||
    pChoice === 'paper' && cChoice === 'rock' ||
    pChoice === 'scissors' && cChoice === 'paper'
  ) {
    outcomeMessage = 'You win!';
  } else if (
    pChoice === 'rock' && cChoice === 'paper' ||
    pChoice === 'paper' && cChoice === 'scissors' ||
    pChoice === 'scissors' && cChoice === 'rock'
  ) {
    outcomeMessage = 'You lose!';
  } else {
    outcomeMessage = 'Result is a tie.';
  }

  return outcomeMessage;
}

function playGame(e) {
  // set player and computer selections
  const playerSelection = e.target.textContent;
  const computerSelection = computerPlay();
  // play round of rock, paper, scissors and save result
  const result = playRound(playerSelection, computerSelection);

  // increment score for player or computer depending on result
  if (result.toLowerCase() === 'you win!') {
    playerScore += 1;
  } else if (result.toLowerCase() === 'you lose!') {
    computerScore += 1;
  }

  // set outcome message to show player choices and result
  let message = document.querySelector('.js-outcome');
  message.innerHTML = `<h4>${playerSelection.toUpperCase()} VS ${computerSelection.toUpperCase()}</h4>
                       <h4>${result.toUpperCase()}</h4>`;

  // update score(s) shown
  let playerScoreEl = document.querySelector('.js-player-score');
  let computerScoreEl = document.querySelector('.js-computer-score');
  playerScoreEl.innerHTML = playerScore;
  computerScoreEl.innerHTML = computerScore;
}

// global game variables
const gameBtns = document.querySelector('.js-controls');
let playerScore = 0;
let computerScore = 0;

// game starts when player clicks one of the button choices
gameBtns.addEventListener('click', playGame);



/*

FUTURE GAME REVISIONS:

Allow players to choose a game mode and number of rounds to be played.

Game mode choices: Free Play, Best of, or First to Goal

*/