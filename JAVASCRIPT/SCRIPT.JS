function getNumbers() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return [num1, num2];
}

function add() {

    let numbers = getNumbers();

    let result = numbers[0] + numbers[1];

    document.getElementById("result").innerHTML =
    "Result : " + result;
}

function subtract() {

    let numbers = getNumbers();

    let result = numbers[0] - numbers[1];

    document.getElementById("result").innerHTML =
    "Result : " + result;
}

function multiply() {

    let numbers = getNumbers();

    let result = numbers[0] * numbers[1];

    document.getElementById("result").innerHTML =
    "Result : " + result;
}

function divide() {

    let numbers = getNumbers();

    if(numbers[1]==0){

        document.getElementById("result").innerHTML =
        "Cannot divide by zero";

        return;
    }

    let result = numbers[0] / numbers[1];

    document.getElementById("result").innerHTML =
    "Result : " + result;
}