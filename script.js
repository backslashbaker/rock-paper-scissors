function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomInt = Math.floor(Math.random() * choices.length)
  return choices[randomInt]
}

function getHumanChoice() {
  const choice = prompt('rock, paper, or scissors?')
  return choice.toLowerCase()
}

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)

function playGame() {
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log('that was a draw')
      computerScore += 1
      humanScore += 1
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore += 1
      console.log('You lose! Paper covers rock')
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore += 1
      console.log('You lose! Scissors cuts paper')
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore += 1
      console.log('You lose! Rock crushes scissors')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore += 1
      console.log('You win! Paper covers rock')
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore += 1
      console.log('You win! Scissors cuts paper')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore += 1
      console.log('You win! Rock crushes scissors')
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`)
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
  }

  if (humanScore > computerScore) {
    console.log('You won the game!')
    console.log(`You: ${humanScore} Computer: ${computerScore}`)
  } else if (humanScore < computerScore) {
    console.log('You lost the game!')
    console.log(`You: ${humanScore} Computer: ${computerScore}`)
  } else {
    console.log('You tied the game!')
    console.log(`You: ${humanScore} Computer: ${computerScore}`)
  }
}

playGame()
