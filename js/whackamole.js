const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
alert("Hit OK and whack as many moles as you can in 60 seconds");

function randomSquare () {
    square.forEach(className => {
      className.classList.remove('mole') 
    });
    let number = Math.random();
    number *= 9;
    number = Math.floor(number);
    console.log("The number after Math.floor is "+ number);

    let randomPosition = square[number];
    randomPosition.classList.add('mole');
    
    //assign the id of the randomPosition to the hitPosition to use later
    console.log("The randomPosition id should be the same as the number plus one apparently "+ randomPosition.id);
    hitPosition = randomPosition.id
}
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000)
}
moveMole();
 
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId);
        alert('Game Over!  Your final score is '+score.innerHTML)
    }
}

let timerId = setInterval(countDown, 1000);
randomSquare();