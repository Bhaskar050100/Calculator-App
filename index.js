document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", function(event) {
        if (event.target.matches("button")) {
            const value = event.target.textContent;
            if (value === "=") {
                calculate();
            } else if (value === "C") {
                clearDisplay();
            } else {
                appendToDisplay(value);
            }
        }
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = "Error";
        }
    }
});
