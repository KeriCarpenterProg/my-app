const grid = document.querySelector('.grid');

function clickButton () {
    console.log("Clicked!");
}

function createBoard() {
    // create the <div class="calculator-grid">
    var area = document.createElement('div');
    area.setAttribute('class','calculator-grid');
    grid.append(area);

    // Create this top area of the calculator
    // <div class="output">
    //         <div data-previous-operand class="previous-operand"></div>
    //         <div data-current-operand class="current-operand"></div>
    //     </div>

    var topRow = document.createElement('div');
    topRow.setAttribute('class','output');
    area.append(topRow);

    var line = document.createElement('div');
    line.setAttribute('class','previous-operand');
    line.setAttribute('data-previous-operand',0);
    topRow.appendChild(line);

    line = document.createElement('div');
    line.setAttribute('class', 'current-operand');
    line.setAttribute('data-previous-operand',0);
    topRow.appendChild(line);

    // Create the AC Button
    // <button data-all-clear class="span-two">AC</button>
    var button = document.createElement('button');
    button.setAttribute('class',"span-two");
    button.setAttribute('data-all-clear','');
    button.innerHTML = 'AC';
    button.addEventListener('click', clickButton);
    area.append(button);

    // Create the DEL Button
    // <button data-delete>DEL</button>
    button = document.createElement('button');
    button.setAttribute('data-delete','');
    button.innerHTML = 'DEL';
    button.addEventListener('click', clickButton);
    area.append(button);

    // Create the % Button
    // <button data-operation>%</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '%';
    button.addEventListener('click', clickButton);
    area.append(button);
    

    // Create buttons 1-3
    for(i=1;i <= 3; i++) {
        //<button data-number>1</button>
        button = document.createElement('button');
        button.setAttribute('data-number', '');
        button.innerHTML = i;
        button.addEventListener('click', clickButton);
        area.append(button);
    }
    // Create the * Button
    // <button data-operation>*</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '*';
    button.addEventListener('click', clickButton);
    area.append(button);

    // Create buttons 4-6
    for(i=4;i <= 6; i++) {
        //<button data-number>1</button>
        button = document.createElement('button');
        button.setAttribute('data-number', '');
        button.innerHTML = i;
        button.addEventListener('click', clickButton);
        area.append(button);
    }

    // Create the + Button
    // <button data-operation>+</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '+';
    button.addEventListener('click', clickButton);
    area.append(button);

    // Create buttons 7-9
    for(i=7;i <= 9; i++) {
        //<button data-number>1</button>
        button = document.createElement('button');
        button.setAttribute('data-number', '');
        button.innerHTML = i;
        button.addEventListener('click', clickButton);
        area.append(button);
    }

    // Create the - Button
    // <button data-operation>-</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '-';
    button.addEventListener('click', clickButton);
    area.append(button);

    // Create the . Button
    // <button data-operation>.</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '.';
    button.addEventListener('click', clickButton);
    area.append(button);

    //<button data-number>0</button>
    button = document.createElement('button');
    button.setAttribute('data-number', '');
    button.innerHTML = 0;
    button.addEventListener('click', clickButton);
    area.append(button);

    // Create the = Button
    // <button data-equals class="span-two">=</button>
    var button = document.createElement('button');
    button.setAttribute('class',"span-two");
    button.setAttribute('data-equals','');
    button.innerHTML = '=';
    area.append(button);
};

    createBoard();