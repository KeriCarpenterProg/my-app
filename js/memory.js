document.addEventListener('DOMContentLoaded', () =>     {
  
    

    // card options

    const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    }, 
    {
        name: "hotdog",
        img: "images/hotdog.png"
    }, 
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    }, 
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },   
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
    ];
//    console.log("the card Array BEFORE sorting ");
//     for(i=0;i < cardArray.length;i++) {
//         console. log(cardArray[i].img);
//     }
    cardArray.sort(() => 0.5-Math.random());
    // console.log("the card Array AFTER sorting ");
    // for(i=0;i < cardArray.length;i++) {
    //     console.log(cardArray[i].img);
    // }

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var matchText = document.querySelector('#display');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
    for(i=0;i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src',"images/blank.png");
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }};

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
      
            matchText.innerText = "You found a match!";
            // alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            matchText.innerText = "Sorry!  That did not match!  Try again.";
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            // alert('Sorry!  That did not match!  Try again.')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = cardArray.length/2;
            matchText.textContent = "Yay!  You Won! You found all the matches!";
        }
    }
    // flip the card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch,500);
        } ;
    }

    createBoard();  
    



    cardArray.forEach(myFunction);

    function myFunction(item, index) {
        let printName = document.getElementById(index);
        // let printString = "<img src=\""+item.img+"\">";
        // console.log("Value of item.name is "+item.name + ". Value of Index is "+index);
        // printName.innerHTML = printString;
        var happy = document.createElement('img')
        happy.setAttribute('src',item.img);
        happy.setAttribute('data-id', index);
        // happy.addEventListener('click', flipCard);
        printName.appendChild(happy);
    }
});