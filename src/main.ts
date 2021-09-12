import './style.css'

let playerOneChoice = ''
let playerTwoChoice = ''

const p1Rock = document.querySelector('.player-one .rock')
const p1Paper = document.querySelector('.player-one .paper')
const p1Scissors = document.querySelector('.player-one .scissors')
const p1Lizard = document.querySelector('.player-one .lizard')
const p1Spock = document.querySelector('.player-one .spock')

const p2Rock = document.querySelector('.player-two .rock')
const p2Paper = document.querySelector('.player-two .paper')
const p2Scissors = document.querySelector('.player-two .scissors')
const p2Lizard = document.querySelector('.player-two .lizard')
const p2Spock = document.querySelector('.player-two .spock')

const winner = document.querySelector('footer')

function _PlayerOneChoseRock(event: Event) {
  localStorage.setItem(playerOneChoice, 'rock')
  playerOneChoice = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function _PlayerOneChosePaper(event: Event) {
  localStorage.setItem(playerOneChoice, 'paper')
  playerOneChoice = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function _PlayerOneChoseScissors(event: Event) {
  localStorage.setItem(playerOneChoice, 'scissor')
  console.log(localStorage)
  playerOneChoice = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function _PlayerOneChoseLizard(event: Event) {
  localStorage.setItem(playerOneChoice, 'lizard')
  playerOneChoice = 'lizard'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function _PlayerOneChoseSpock(event: Event) {
  localStorage.setItem(playerOneChoice, 'spock')
  playerOneChoice = 'spock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
}

function _PlayerTwoChoseRock(event: Event) {
  localStorage.setItem(playerTwoChoice, 'rock')
  playerTwoChoice = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function _PlayerTwoChosePaper(event: Event) {
  localStorage.setItem(playerTwoChoice, 'paper')
  playerTwoChoice = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function _PlayerTwoChoseScissors(event: Event) {
  localStorage.setItem(playerTwoChoice, 'scissors')
  playerTwoChoice = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function _PlayerTwoChoseLizard(event: Event) {
  localStorage.setItem(playerTwoChoice, 'lizard')
  playerTwoChoice = 'lizard'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function _PlayerTwoChoseSpock(event: Event) {
  localStorage.setItem(playerTwoChoice, 'spock')
  playerTwoChoice = 'spock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
}

p1Rock?.addEventListener('click', _PlayerOneChoseRock)
p1Paper?.addEventListener('click', _PlayerOneChosePaper)
p1Scissors?.addEventListener('click', _PlayerOneChoseScissors)
p1Lizard?.addEventListener('click', _PlayerOneChoseLizard)
p1Spock?.addEventListener('click', _PlayerOneChoseSpock)

p2Rock?.addEventListener('click', _PlayerTwoChoseRock)
p2Paper?.addEventListener('click', _PlayerTwoChosePaper)
p2Scissors?.addEventListener('click', _PlayerTwoChoseScissors)
p2Lizard?.addEventListener('click', _PlayerTwoChoseLizard)
p2Spock?.addEventListener('click', _PlayerTwoChoseSpock)
