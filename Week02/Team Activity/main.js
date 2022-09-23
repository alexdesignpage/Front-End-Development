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