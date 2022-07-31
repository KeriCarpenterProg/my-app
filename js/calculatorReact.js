class Calculator {
    constructor(container) {
        this.currentOperand = '';
        this.previousOperand = '';
        this.opeonecolumnwrapperration = undefined;
        this.grid = container || document.querySelector('.onecolumnwrapper');
        this.createBoard();
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
    
    clickButton(theButton){
        switch(theButton){
                    case "AC":
                        this.clear();
                        this.updateDisplay();
                        break;
                    case "DEL":
                        this.delete();
                        this.updateDisplay();
                        break;
                    case "=":
                        this.compute();
                        this.updateDisplay();
                        // This is a hack I used because the numbers weren't clearing after equals.
                        // wasEqual = true;
                        this.currentOperand = '';
                        this.previousOperand = '';
                        this.operation = undefined;
                        break;
                    case "%":
                    case "*":
                    case "+":
                    case "-":
                        this.chooseOperation(theButton);
                        this.updateDisplay();
                        break;
                    case ".":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "0":
                        this.appendNumber(theButton);
                        this.updateDisplay();
                        break;
                }
    }
    

    createBoard() {

    

    // create the <div class="calculator-grid">
    var area = document.createElement('div');
    area.setAttribute('class','calculator-grid');
    this.grid.append(area);


    // Create this top area of the calculator
    // <div class="output">
    //         <div data-previous-operand class="previous-operand"></div>
    //         <div data-current-operand class="current-operand"></div>
    //     </div>

    var topRow = document.createElement('div');
    topRow.setAttribute('class','output');
    area.append(topRow);

    var line = document.createElement('div');
    this.previousOperandTextElement = line;
    line.setAttribute('class','previous-operand');
    line.setAttribute('data-previous-operand','');
    // line.innerHTML = 'previous number';
    topRow.appendChild(line);

    line = document.createElement('div');
    this.currentOperandTextElement = line;

    line.setAttribute('class', 'current-operand');
    line.setAttribute('data-current-operand','');
    // line.innerHTML = 'current number';
    topRow.appendChild(line);

    // Create the AC Button
    // <button data-all-clear class="span-two">AC</button>
    var button = document.createElement('button');
    button.setAttribute('class',"span-two");
    button.setAttribute('data-all-clear','');
    button.innerHTML = 'AC';
    button.addEventListener('click',this.clickButton.bind(this, button.innerHTML));
    area.append(button);

    // Create the DEL Button
    // <button data-delete>DEL</button>
    // button = document.createElement('button');
    // button.setAttribute('data-delete','');
    // button.innerHTML = 'DEL';
    // button.addEventListener('click',this.clickButton.bind(this, button.innerHTML));
    // area.append(button);

    // Create the % Button
    // <button data-operation>%</button>
    // button = document.createElement('button');
    // button.setAttribute('data-operation','');
    // button.innerHTML = '%';
    // button.addEventListener('click',this.clickButton.bind(this, button.innerHTML));
    // area.append(button);
    
    const printButtons = 
        [ 
            ['button','data-delete','DEL'],
            ['button','data-operation','%'],
            ['button','data-number',1],
            ['button','data-number',2], 
            ['button','data-number',3], 
            ['button','data-operation','*'],
            ['button','data-number',4],
            ['button','data-number',5], 
            ['button','data-number',6], 
            ['button','data-operation','+'],
            ['button','data-number',7],
            ['button','data-number',8], 
            ['button','data-number',9], 
            ['button','data-operation','-'],
            ['button','data-operation','.'], 
            ['button','data-number',0], 
        ];
        
    // Create buttons 1-3 using .map
    printButtons.map((function(index){
        button = document.createElement(index[0]);
        button.setAttribute(index[1], '');
        button.innerHTML = index[2];
        button.addEventListener('click',this.clickButton.bind(this, button.innerHTML));
        area.append(button);
    }).bind(this));

    

    // Create the = Button
    // <button data-equals class="span-two">=</button>
    button = document.createElement('button');
    button.setAttribute('class',"span-two");
    button.setAttribute('data-equals','');
    button.innerHTML = '=';
    button.addEventListener('click',this.clickButton.bind(this, button.innerHTML));
    area.append(button);

    // Create a HR so they are at least above and below
    button = document.createElement('hr');
    area.append(button);
    };
    
    
    
}


//  if you have done the constructor correctly, it should be as easy as
//  "let calc1 = new Calculator(); let calc2 = new Calculator();" 
// and then render each one to screen.
let grid = document.querySelector('.grid');
var introText = document.createElement('h1');
    introText.innerHTML = "Calculator refactored into React";
grid.append(introText);
introText = document.createElement('p');
introText.innerHTML = "Goal:  Refactor this Javascript calculator into React";
grid.append(introText);
introText = document.createElement('h5');
introText.innerHTML = "I am doing this in July 2022 for Kevin Chan to prove my React skills";
grid.append(introText);
introText = document.createElement('li');
introText.innerHTML = "Open up my React App";
grid.append(introText);
introText = document.createElement('li');
introText.innerHTML = "Start to engage with how to refactor it into React";
grid.append(introText);


// create the <div class="calculator-grid">
var area = document.createElement('div');
area.setAttribute('class','onecolumnwrapper');
grid.append(area);

const calculator = new Calculator();











