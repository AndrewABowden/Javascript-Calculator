var firstNumber = 0;
var secondNumber = 0;
var operator;
var equals;
var numberChosen;
var submit;
var user;

//operator math

function doMath() {
    switch (operator) {
        case 'add':
        firstNumber + secondNumber;
        break;
        case 'subtract':
        firstNumber - secondNumber;
        break;
        case 'multiply':
        firstNumber - secondNumber;
        break;
        case 'divide':
        firstNumber / secondNumber;
        break;
        case 'power':
        firstNumber ^ secondNumber;
        break;
    }

    console.log(operator);
}

// document.getElementsByClassName("button").addEventListener("click", doMath()); {

// }

document.getElementsByClassName("button").addEventListener("click", function(){
    console.log("you clicked: ", this.innerHTML)
});

function numbers(value) {
    //get val of screen 
    var screen = document.getElementById("screen");

    //if = selected, pass through number functions
    if(value === "=")
    {
        var all=screen.value.split(" ")
        firstNumbert=parseFloat(all[0]);
            operator = all[1];
        secondNumber=parseFloat(all[2]);

        var screen=document.getElementById("screen");

            if (secondPart === 0) {
                screen.value="division by zero!"
            }
            switch(operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    screen.value = result;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    screen.value = result;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    screen.value = result;
                    break;
                case '/':
                    result = firstNumber / secondNumber;
                    screen.value = result;
                    break;
                case '%':
                    result = firstNumber % secondNumber;
                    screen.value = result;
                    break;
                default:
                break;
            }
    }
}

