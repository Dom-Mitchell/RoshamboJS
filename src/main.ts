import './style.css'

// Variables
let playerOneChoice = ''
let playerTwoChoice = ''
const winner = document.querySelector('.winner-text')
console.log(winner)

// Player One Data

const p1Rock = document.querySelector('.player-one .rock')
p1Rock?.addEventListener('click', _PlayerOneChoseRock)
console.log(p1Rock)

function _PlayerOneChoseRock(event: Event) {
  localStorage.setItem(playerOneChoice, 'rock')
  console.log(playerOneChoice)
  playerOneChoice = 'rock'

  const buttonClicked = event.target

  localStorage.setItem(playerTwoChoice, 'scissors')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  localStorage.setItem(playerTwoChoice, 'paper')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  localStorage.setItem(playerTwoChoice, 'rock')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  localStorage.setItem(playerTwoChoice, 'lizard')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  localStorage.setItem(playerTwoChoice, 'spock')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

const p1Paper = document.querySelector('.player-one .paper')
p1Paper?.addEventListener('click', _PlayerOneChosePaper)

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

const p1Scissors = document.querySelector('.player-one .scissors')
p1Scissors?.addEventListener('click', _PlayerOneChoseScissors)

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

const p1Lizard = document.querySelector('.player-one .lizard')
p1Lizard?.addEventListener('click', _PlayerOneChoseLizard)

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

const p1Spock = document.querySelector('.player-one .spock')
p1Spock?.addEventListener('click', _PlayerOneChoseSpock)

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

// Player 2 Data

const p2Rock = document.querySelector('.player-two .rock')
console.log(p1Rock)
p2Rock?.addEventListener('click', _PlayerTwoChoseRock)

function _PlayerTwoChoseRock(event: Event) {
  localStorage.setItem(playerTwoChoice, 'rock')
  console.log(playerTwoChoice)
  playerTwoChoice = 'rock'

  const buttonClicked = event.target

  localStorage.setItem(playerOneChoice, 'scissors')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  localStorage.setItem(playerOneChoice, 'paper')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  localStorage.setItem(playerOneChoice, 'rock')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  localStorage.setItem(playerOneChoice, 'lizard')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  localStorage.setItem(playerOneChoice, 'spock')
  if (buttonClicked instanceof HTMLButtonElement) {
    localStorage.getItem(playerOneChoice)
    localStorage.getItem(playerTwoChoice)
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

const p2Paper = document.querySelector('.player-two .paper')
p2Paper?.addEventListener('click', _PlayerTwoChosePaper)

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

const p2Scissors = document.querySelector('.player-two .scissors')
p2Scissors?.addEventListener('click', _PlayerTwoChoseScissors)

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

const p2Lizard = document.querySelector('.player-two .lizard')
p2Lizard?.addEventListener('click', _PlayerTwoChoseLizard)

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

const p2Spock = document.querySelector('.player-two .spock')
p2Spock?.addEventListener('click', _PlayerTwoChoseSpock)

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
