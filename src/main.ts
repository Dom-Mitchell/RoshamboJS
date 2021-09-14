import './style.css'

// // Variables
// // let playerOneChoice = ''
// // let playerTwoChoice = ''
// // const winner = document.querySelector('.winner-text')
// // console.log(winner)

// // Player One Data

// // const p1Rock = document.querySelector('.player-one.rock')
// // p1Rock?.addEventListener('click', _PlayerOneChoseRock)
// // console.log(p1Rock)

// // function _PlayerOneChoseRock(event: Event) {
// //   sessionStorage.setItem('thing-player-one-chose', 'rock')
// //   alert('yup')
// //   console.log(playerOneChoice)
// //   playerOneChoice = 'rock'

// //   const buttonClicked = event.target

// //   // sessionStorage.setItem('thing-player-two-chose', 'scissors')
// //   playerTwoChoice = 'scissors'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = sessionStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'scissors') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-two-chose', 'paper')
// //   playerTwoChoice = 'paper'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = sessionStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'paper') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-two-chose', 'rock')
// //   playerTwoChoice = 'rock'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = sessionStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'rock') {
// //       if (winner) {
// //         winner.textContent = 'It was a draw!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-two-chose', 'lizard')
// //   playerTwoChoice = 'lizard'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = sessionStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'lizard') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-two-chose', 'spock')
// //   playerTwoChoice = 'spock'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = sessionStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'spock') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// // }

// const p1Paper = document.querySelector('.player-one.paper')
// p1Paper?.addEventListener('click', _PlayerOneChosePaper)

// function _PlayerOneChosePaper(event: Event) {
//   sessionStorage.setItem(playerOneChoice, 'paper')
//   playerOneChoice = 'paper'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
// }

// const p1Scissors = document.querySelector('.player-one.scissors')
// p1Scissors?.addEventListener('click', _PlayerOneChoseScissors)

// function _PlayerOneChoseScissors(event: Event) {
//   sessionStorage.setItem(playerOneChoice, 'scissor')
//   console.log(sessionStorage)
//   playerOneChoice = 'scissors'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
// }

// const p1Lizard = document.querySelector('.player-one.lizard')
// p1Lizard?.addEventListener('click', _PlayerOneChoseLizard)

// function _PlayerOneChoseLizard(event: Event) {
//   sessionStorage.setItem(playerOneChoice, 'lizard')
//   playerOneChoice = 'lizard'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
// }

// const p1Spock = document.querySelector('.player-one.spock')
// p1Spock?.addEventListener('click', _PlayerOneChoseSpock)

// function _PlayerOneChoseSpock(event: Event) {
//   sessionStorage.setItem(playerOneChoice, 'spock')
//   playerOneChoice = 'spock'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
// }

// // Player 2 Data

// // const p2Rock = document.querySelector('.player-two.rock')
// // console.log(p1Rock)
// // p2Rock?.addEventListener('click', _PlayerTwoChoseRock)

// // function _PlayerTwoChoseRock(event: Event) {
// //   sessionStorage.setItem('thing-player-two-chose', 'rock')
// //   playerTwoChoice = 'rock'

// //   const buttonClicked = event.target

// //   // sessionStorage.setItem('thing-player-one-chose', 'scissors')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = sessionStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'scissors') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-one-chose', 'paper')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = sessionStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'paper') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-one-chose', 'rock')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = sessionStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'rock') {
// //       if (winner) {
// //         winner.textContent = 'It was a draw!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-one-chose', 'lizard')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = sessionStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'lizard') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// //   // sessionStorage.setItem('thing-player-one-chose', 'spock')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = sessionStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'spock') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// // }

// const p2Paper = document.querySelector('.player-two.paper')
// p2Paper?.addEventListener('click', _PlayerTwoChosePaper)

// function _PlayerTwoChosePaper(event: Event) {
//   sessionStorage.setItem(playerTwoChoice, 'paper')
//   playerTwoChoice = 'paper'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
// }

// const p2Scissors = document.querySelector('.player-two.scissors')
// p2Scissors?.addEventListener('click', _PlayerTwoChoseScissors)

// function _PlayerTwoChoseScissors(event: Event) {
//   sessionStorage.setItem(playerTwoChoice, 'scissors')
//   playerTwoChoice = 'scissors'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
// }

// const p2Lizard = document.querySelector('.player-two.lizard')
// p2Lizard?.addEventListener('click', _PlayerTwoChoseLizard)

// function _PlayerTwoChoseLizard(event: Event) {
//   sessionStorage.setItem(playerTwoChoice, 'lizard')
//   playerTwoChoice = 'lizard'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
// }

// const p2Spock = document.querySelector('.player-two.spock')
// p2Spock?.addEventListener('click', _PlayerTwoChoseSpock)

// function _PlayerTwoChoseSpock(event: Event) {
//   sessionStorage.setItem(playerTwoChoice, 'spock')
//   playerTwoChoice = 'spock'

//   const buttonClicked = event.target

//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'scissors') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'paper') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'rock') {
//       if (winner) {
//         winner.textContent = 'Player 2 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'lizard') {
//       if (winner) {
//         winner.textContent = 'Player 1 wins!'
//       }
//     }
//   }
//   if (buttonClicked instanceof HTMLButtonElement) {
//     if (playerOneChoice != '' && playerOneChoice === 'spock') {
//       if (winner) {
//         winner.textContent = 'It was a draw!'
//       }
//     }
//   }
// }

// Vars
// let playerOneChoice = ''
// let playerTwoChoice = ''

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
