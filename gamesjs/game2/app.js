const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mouse')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare(){
  square.forEach(className => {
    className.classList.remove('mouse')
  })
  let randonPosition = square[Math.floor(Math.random() *9)]
  randonPosition.classList.add('mouse')

  hitPosition = randonPosition.id 
}

square.forEach(id => {
  id.addEventListener('mouseup',() =>{
    if(id.id == hitPosition){
      result = result +1
      score.textContent = result
    }
  })
})

function moveMouse(){
  let timerId = null
  timerId = setInterval(randomSquare, 1500)
}

function countDown() {
currentTime--
timeLeft.textContent = currentTime

if(currentTime ==0){
  clearInterval(timerId)
  alert('Game over ' + result)
  score.textContent = 0
  }
}

let timerId = setInterval(countDown, 1000)

moveMouse()