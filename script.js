let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.random(Math.floor() *10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (Math.abs(humanGuess - target) < Math.abs(computerGuess - target)) {
     return true;
 } else if (Math.abs(computerGuess - target) < Math.abs(humanGuess - target)) {
     return false;
 } else {
     return true;
 }
};

const updateScore = (winner) => {
  if (winner === 'human') {
     humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }else {
     humanScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
