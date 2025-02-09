function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomInt = Math.floor(Math.random() * choices.length)
  return choices[randomInt]
}

const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paper-button')
const scissorsButton = document.getElementById('scissors-button')
const resultsDiv = document.getElementById('results')
const scoreDiv = document.getElementById('score')
const gameEndDiv = document.getElementById('game-end')

function playGame() {
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    if (humanScore === 5) {
      gameEndDiv.innerText = 'You win the game! Congratulations!'
      rockButton.disabled = true
      paperButton.disabled = true
      scissorsButton.disabled = true
      return
    } else if (computerScore === 5) {
      gameEndDiv.innerText = 'Computer wins the game! Better luck next time!'
      rockButton.disabled = true
      paperButton.disabled = true
      scissorsButton.disabled = true
      return
    }

    if (humanChoice === computerChoice) {
      resultsDiv.innerText = 'that was a draw'
      computerScore += 1
      humanScore += 1
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore += 1
      resultsDiv.innerText = 'You lose! Paper covers rock'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore += 1
      resultsDiv.innerText = 'You lose! Scissors cuts paper'
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore += 1
      resultsDiv.innerText = 'You lose! Rock crushes scissors'
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore += 1
      resultsDiv.innerText = 'You win! Paper covers rock'
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore += 1
      resultsDiv.innerText = 'You win! Scissors cuts paper'
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore += 1
      resultsDiv.innerText = 'You win! Rock crushes scissors'
    }
    scoreDiv.innerText = `You: ${humanScore} Computer: ${computerScore}`
  }

  rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
  })
  paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
  })
  scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
  })
}

playGame()
