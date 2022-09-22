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