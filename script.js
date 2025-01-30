function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomInt = Math.floor(Math.random() * choices.length)
  return choices[randomInt]
}


