document.addEventListener('DOMContentLoaded',() => {

//card options
const cardArray = [
    {
      name: 'bird',
      img: 'images/bird.png'
    },
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'dino',
      img: 'images/dino.png'
    },
    {
      name: 'dog',
      img: 'images/dog.png'
    },
    {
      name: 'elephant',
      img: 'images/elephant.png'
    },
    {
      name: 'fox',
      img: 'images/fox.png'
    },
    {
      name: 'bird',
      img: 'images/bird.png'
    },
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'dino',
      img: 'images/dino.png'
    },
    {
      name: 'dog',
      img: 'images/dog.png'
    },
    {
      name: 'elephant',
      img: 'images/elephant.png'
    },
    {
      name: 'fox',
      img: 'images/fox.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const showAlert = document.querySelector('#alerts') 
  const showCards = document.querySelector('#clearCards')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []


  //create board
  function createBoard(){
      for(let i=0; i<cardArray.length;i++){
          var card = document.createElement('img');
          card.setAttribute('src','images/cover.png');
          card.setAttribute('data-id',i);
          card.addEventListener('click',flipCard)
          grid.appendChild(card);
      }
  }

  //check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionOneTwo = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        if(showAlert.checked == true){
          alert('Found a match')
        }
        if(showCards.checked == true){
        cards[optionOneId].setAttribute('src','images/win.png')
        cards[optionOneTwo].setAttribute('src','images/win.png')
        }
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/cover.png')
        cards[optionOneTwo].setAttribute('src','images/cover.png')
        if(showAlert.checked == true){
          alert('Sorry try again')
        }
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }


}

  //flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosenId)
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
      if(cardsChosenId[0]!=cardsChosenId[1]){
        setTimeout(checkForMatch, 500);
      }else{
        cardsChosenId.pop();
        cardsChosen.pop();
      }
      
    }
}   


 //Create the board
  createBoard();

})