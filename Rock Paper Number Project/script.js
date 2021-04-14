let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }
  
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;
  
  /*
// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (user, computer, secret) => {
    const user = Math.abs(secret - user)
    const computer = Math.abs(secret - computer)
    return user <= computer; 
}

const updateScore = winner => {
    if(winner === user) {
        user++;
    } else if(winner === computer) {
        computer++;
    }

}

const advanceRound = () => currentRoundNumber++;
*/