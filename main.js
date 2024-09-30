var input1Element = document.getElementById("input1");
var input2Element = document.getElementById("input2");

function add() {
    var result = parseFloat(input1Element.value) + parseFloat(input2Element.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function subtract() {
    var result = parseFloat(input1Element.value) - parseFloat(input2Element.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function multiply() {
    var result = parseFloat(input1Element.value) * parseFloat(input2Element.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function division() {
    var result = parseFloat(input1Element.value) / parseFloat(input2Element.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function clear() {

    input1Element.value = "";
    input2Element.value = "";
}