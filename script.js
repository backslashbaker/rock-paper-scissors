function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomInt = Math.floor(Math.random() * choices.length)
  console.log('computer choice =', choices[randomInt])
  return choices[randomInt]
}

function getHumanChoice() {
  const choice = prompt('rock, paper, or scissors?')
  console.log('human choice =', choice)
  return choice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  const humanSelection = humanChoice.toLowerCase()

  if (humanSelection === computerChoice) {
    console.log('that was a draw')
  } else if (humanSelection === 'rock' && computerChoice === 'paper') {
    computerScore += 1
    console.log('You lose! Paper covers rock')
  } else if (humanSelection === 'paper' && computerChoice === 'scissors') {
    computerScore += 1
    console.log('You lose! Scissors cuts paper')
  } else if (humanSelection === 'scissors' && computerChoice === 'rock') {
    computerScore += 1
    console.log('You lose! Rock crushes scissors')
  } else if (humanSelection === 'paper' && computerChoice === 'rock') {
    humanScore += 1
    console.log('You win! Paper covers rock')
  } else if (humanSelection === 'scissors' && computerChoice === 'paper') {
    humanScore += 1
    console.log('You win! Scissors cuts paper')
  } else if (humanSelection === 'rock' && computerChoice === 'scissors') {
    humanScore += 1
    console.log('You win! Rock crushes scissors')
  }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)
