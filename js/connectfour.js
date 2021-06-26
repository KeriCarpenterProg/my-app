document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer=1;

    for(var i=0; i < squares.length;i++) {
            squares[i].textContent = i;
            squares[i].onclick = function() {
                displayCurrentPlayer.textContent= "Value is crazy";
            }
        }
        
    // for(var i=0, len= squares.length; i< len; i++)
    
    // (function(index) {
    //     //add an onclick event to each square in my grid
    //     squares[i].onclick = function(){
    //         console.log(displayCurrentPlayer.textContent);
    //     }
    // })


})