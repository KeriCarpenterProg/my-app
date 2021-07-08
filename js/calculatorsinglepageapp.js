class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    clear() {   
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number) {
        // if(wasEqual === true) {
        //     this.currentOperand = '';
        //     wasEqual = false;
        // }
        if(number === '.' && this.currentOperand.includes('.')) return;
        if(isNaN(this.currentOperand)) 
        { 
                this.currentOperand = number.toString();
        } else this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        // console.log("Previous Number is "+ this.previousOperand);
        // console.log("Current Operand is "+ this.currentOperand);
        const curr = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(curr)) return;
        switch(this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '%':
                computation = prev / curr;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        // console.log("The value of computation is " + computation);
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.'));
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
             maximumFractionDigits: 0   
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
           this.previousOperandTextElement.innerText = ''; 
        }
    }







}


//  if you have done the constructor correctly, it should be as easy as
//  "let calc1 = new Calculator(); let calc2 = new Calculator();" 
// and then render each one to screen.
const calculator = new Calculator("1","2");

const grid = document.querySelector('.grid');

function clickButton (theButton) {
    console.log(theButton);
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
    button.addEventListener('click', function() {clickButton('AC');});
    area.append(button);

    // Create the DEL Button
    // <button data-delete>DEL</button>
    button = document.createElement('button');
    button.setAttribute('data-delete','');
    button.innerHTML = 'DEL';
    button.addEventListener('click', function() {clickButton('DEL');});
    area.append(button);

    // Create the % Button
    // <button data-operation>%</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '%';
    button.addEventListener('click', function() {clickButton('%');});
    area.append(button);
    

    // Create buttons 1-3
    for(i=1;i <= 3; i++) {
        //<button data-number>1</button>
        button = document.createElement('button');
        button.setAttribute('data-number', '');
        button.innerHTML = i;
        button.addEventListener('click', function() {clickButton(i);});
        area.append(button);
    }
    // Create the * Button
    // <button data-operation>*</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '*';
    button.addEventListener('click', function() {clickButton('*');});
    area.append(button);

    // Create buttons 4-6
    for(i=4;i <= 6; i++) {
        //<button data-number>1</button>
        button = document.createElement('button');
        button.setAttribute('data-number', '');
        button.innerHTML = i;
        button.addEventListener('click', function() {clickButton(button.innerHTML);});
        area.append(button);
    }

    // Create the + Button
    // <button data-operation>+</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '+';
    button.addEventListener('click', function() {clickButton('+');});
    area.append(button);

    // Create buttons 7-9
    for(i=7;i <= 9; i++) {
        //<button data-number>1</button>
        button = document.createElement('button');
        button.setAttribute('data-number', '');
        button.innerHTML = i;
        button.addEventListener('click', function() {clickButton(i);});
        area.append(button);
    }

    // Create the - Button
    // <button data-operation>-</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '-';
    button.addEventListener('click', function() {clickButton('-');});
    area.append(button);

    // Create the . Button
    // <button data-operation>.</button>
    button = document.createElement('button');
    button.setAttribute('data-operation','');
    button.innerHTML = '.';
    button.addEventListener('click', function() {clickButton('.');});
    area.append(button);

    //<button data-number>0</button>
    button = document.createElement('button');
    button.setAttribute('data-number', '');
    button.innerHTML = 0;
    button.addEventListener('click', function() {clickButton(0);});
    area.append(button);

    // Create the = Button
    // <button data-equals class="span-two">=</button>
    button = document.createElement('button');
    button.setAttribute('class',"span-two");
    button.setAttribute('data-equals','');
    button.innerHTML = '=';
    button.addEventListener('click', function() {clickButton('=');});
    area.append(button);
};

    createBoard();

















