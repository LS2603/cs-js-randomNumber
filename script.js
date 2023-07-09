let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return  Math.floor(Math.random() * 10);
}



const compareGuesses = (userNumber, computerNumber, randomNumber) => {
  const userDifference = Math.abs (randomNumber - userNumber);
  const computerDifference = Math.abs (randomNumber - computerNumber);
  return userDifference <= computerDifference
}

const updateScore = (winner) => {
  if (winner = 'human') {
    humanScore += 1;
  } else if (winner = 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;
