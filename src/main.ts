import './style.css'

// P1 Data

// Rock
const p1Rock = document.querySelector('.player-one.rock')
p1Rock?.addEventListener('click', _PlayerOneChoseRock)
// console.log(p1Rock)

function _PlayerOneChoseRock() {
  sessionStorage.setItem('thing-player-one-chose', 'rock')
}

// Paper
const p1Paper = document.querySelector('.player-one.paper')
p1Paper?.addEventListener('click', _PlayerOneChosePaper)
// console.log(p1Paper)

function _PlayerOneChosePaper() {
  sessionStorage.setItem('thing-player-one-chose', 'paper')
}

// Scissors
const p1Scissors = document.querySelector('.player-one.scissors')
p1Scissors?.addEventListener('click', _PlayerOneChoseScissors)
// console.log(p1Scissors)

function _PlayerOneChoseScissors() {
  sessionStorage.setItem('thing-player-one-chose', 'scissors')
}

// Lizard
const p1Lizard = document.querySelector('.player-one.lizard')
p1Lizard?.addEventListener('click', _PlayerOneChoseLizard)
// console.log(p1Lizard)

function _PlayerOneChoseLizard() {
  sessionStorage.setItem('thing-player-one-chose', 'lizard')
}

// Spock
const p1Spock = document.querySelector('.player-one.spock')
p1Spock?.addEventListener('click', _PlayerOneChoseSpock)
// console.log(p1Spock)

function _PlayerOneChoseSpock() {
  sessionStorage.setItem('thing-player-one-chose', 'spock')
}

// P2 Data

// Rock
const p2Rock = document.querySelector('.player-two.rock')
p2Rock?.addEventListener('click', _PlayerTwoChoseRock)
// console.log(p2Rock)

function _PlayerTwoChoseRock() {
  sessionStorage.setItem('thing-player-two-chose', 'rock')
}

// Paper
const p2Paper = document.querySelector('.player-two.paper')
p2Paper?.addEventListener('click', _PlayerTwoChosePaper)
// console.log(p2Paper)

function _PlayerTwoChosePaper() {
  sessionStorage.setItem('thing-player-two-chose', 'paper')
}

// Scissors
const p2Scissors = document.querySelector('.player-two.scissors')
p2Scissors?.addEventListener('click', _PlayerTwoChoseScissors)
// console.log(p2Scissors)

function _PlayerTwoChoseScissors() {
  sessionStorage.setItem('thing-player-two-chose', 'scissors')
}

// Lizard
const p2Lizard = document.querySelector('.player-two.lizard')
p2Lizard?.addEventListener('click', _PlayerTwoChoseLizard)
// console.log(p2Lizard)

function _PlayerTwoChoseLizard() {
  sessionStorage.setItem('thing-player-two-chose', 'lizard')
}

// Spock
const p2Spock = document.querySelector('.player-two.spock')
p2Spock?.addEventListener('click', _PlayerTwoChoseSpock)
// console.log(p2Spock)

function _PlayerTwoChoseSpock() {
  sessionStorage.setItem('thing-player-two-chose', 'spock')
}

// Winner Data
const winner = document.querySelector('.winner-text')
if (winner) {
  _Winner()
}

function _Winner() {
  const playerOneChoice = sessionStorage.getItem('thing-player-one-chose')
  const playerTwoChoice = sessionStorage.getItem('thing-player-two-chose')

  if (playerOneChoice === playerTwoChoice) {
    winner!.textContent = 'Tie!'
  } else if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'rock' && playerTwoChoice === 'lizard') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'lizard' && playerTwoChoice === 'spock') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'spock' && playerTwoChoice === 'scissors') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'scissors' && playerTwoChoice === 'lizard') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'lizard' && playerTwoChoice === 'paper') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'paper' && playerTwoChoice === 'spock') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'spock' && playerTwoChoice === 'rock') {
    winner!.textContent = 'Player 1 Wins!'
  } else if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
    winner!.textContent = 'Player 1 Wins!'
  } else {
    winner!.textContent = 'Player 2 Wins!'
  }
}
