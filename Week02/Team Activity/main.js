function sumAll() {
    var numberInput = document.getElementById("sumall").value;
    if (isNaN(numberInput)) {
        document.getElementById("output").innerHTML =
            numberInput + " is not a number."
    }
    else {
        var sum = 0;
        for (var i = 1; i <= numberInput; i++) {
            sum += i;
            document.getElementById("output").innerHTML = sum;
        }
    }
}
function checkNumber(number, errorMessage){
    if (number !== NaN) {
        document.getElementById("output").innerHTML = errorMessage;
        return false;
    } else {
        return number;
    }
}

//let input = obtainNumbers();

function obtainNumber(id){
    const num = document.getElementById(id).value;
    if(num !== NaN){
        return parseFloat(num);
    } else {
        return 0;
    }
}


function add(number1, number2){
    return number1 + number2;
}

function updateTotal(total){
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = total;
}

function performOperation(operation){
    console.log("clicked");
    const total = operation(obtainNumber("number1"), obtainNumber("number2"));
    updateTotal(total);
}

const subtract = (num1, num2) => {
    return num1 - num2;
} 

const multiply = function (num1, num2) {
    return num1 * num2;
}


// STEP 01
//  GET ELEMENTS
const inputUser = document.getElementById('input01');
const btn01 = document.getElementById('btn01');
const output = document.getElementById('output');

// FUNCTION TO DISPLAY TEXT IN THE DIV 
function displayText() {
    output.innerHTML = inputUser.value;
    inputUser.value = '';
}

// ACTIVE BUTTON
btn01.addEventListener('click', displayText);