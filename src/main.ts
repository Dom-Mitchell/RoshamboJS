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
// //   localStorage.setItem('thing-player-one-chose', 'rock')
// //   alert('yup')
// //   console.log(playerOneChoice)
// //   playerOneChoice = 'rock'

// //   const buttonClicked = event.target

// //   // localStorage.setItem('thing-player-two-chose', 'scissors')
// //   playerTwoChoice = 'scissors'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = localStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'scissors') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-two-chose', 'paper')
// //   playerTwoChoice = 'paper'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = localStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'paper') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-two-chose', 'rock')
// //   playerTwoChoice = 'rock'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = localStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'rock') {
// //       if (winner) {
// //         winner.textContent = 'It was a draw!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-two-chose', 'lizard')
// //   playerTwoChoice = 'lizard'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = localStorage.getItem('thing-player-two-chose')
// //     if (playerTwoChoice === 'lizard') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-two-chose', 'spock')
// //   playerTwoChoice = 'spock'
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerTwoChoice = localStorage.getItem('thing-player-two-chose')
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
//   localStorage.setItem(playerOneChoice, 'paper')
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
//   localStorage.setItem(playerOneChoice, 'scissor')
//   console.log(localStorage)
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
//   localStorage.setItem(playerOneChoice, 'lizard')
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
//   localStorage.setItem(playerOneChoice, 'spock')
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
// //   localStorage.setItem('thing-player-two-chose', 'rock')
// //   playerTwoChoice = 'rock'

// //   const buttonClicked = event.target

// //   // localStorage.setItem('thing-player-one-chose', 'scissors')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = localStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'scissors') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-one-chose', 'paper')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = localStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'paper') {
// //       if (winner) {
// //         winner.textContent = 'Player 1 wins!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-one-chose', 'rock')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = localStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'rock') {
// //       if (winner) {
// //         winner.textContent = 'It was a draw!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-one-chose', 'lizard')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = localStorage.getItem('thing-player-one-chose')
// //     if (playerOneChoice === 'lizard') {
// //       if (winner) {
// //         winner.textContent = 'Player 2 wins!'
// //       }
// //     }
// //   }
// //   // localStorage.setItem('thing-player-one-chose', 'spock')
// //   if (buttonClicked instanceof HTMLButtonElement) {
// //     const playerOneChoice = localStorage.getItem('thing-player-one-chose')
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
//   localStorage.setItem(playerTwoChoice, 'paper')
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
//   localStorage.setItem(playerTwoChoice, 'scissors')
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
//   localStorage.setItem(playerTwoChoice, 'lizard')
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
//   localStorage.setItem(playerTwoChoice, 'spock')
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
const p1Rock = document.querySelector('.player-one.rock')
p1Rock?.addEventListener('click', _PlayerOneChoseRock)
console.log(p1Rock)

function _PlayerOneChoseRock() {
  localStorage.setItem('thing-player-one-chose', 'rock')
}

// P2 Data
const p2Rock = document.querySelector('.player-two.rock')
p2Rock?.addEventListener('click', _PlayerTwoChoseRock)
console.log(p2Rock)

function _PlayerTwoChoseRock() {
  localStorage.setItem('thing-player-two-chose', 'rock')
}

const winner = document.querySelector('.winner-text')
if (winner) {
  _Winner()
}

function _Winner() {
  const playerOneChoice = localStorage.getItem('thing-player-one-chose')
  const playerTwoChoice = localStorage.getItem('thing-player-two-chose')

  if (playerOneChoice === playerTwoChoice) {
    winner!.textContent = 'Tie!'
  }
}
