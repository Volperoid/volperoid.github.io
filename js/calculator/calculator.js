function calculate() {
    let operation = document.getElementById("calc-display").value;
    if (/^[\d()\/*.+-]+$/.test(operation)) { // ! security measure for `eval()`
        document.getElementById("calc-display").value = eval(operation);
    } else {
        alert("Only numbers and mathematical operators allowed.");
    };
};
function clearValue() {
    document.getElementById("calc-display").value = "";
};
function printValue(digit) {
    let oldValue = document.getElementById("calc-display").value; // The calculator looks at what is present on its display.
    document.getElementById("calc-display").value = oldValue + digit; // It then adds the new input to the current state of the display; otherwise, any input would replace the previous one.
};