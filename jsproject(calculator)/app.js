const buttons = document.querySelectorAll('.buttons');
const number = document.querySelector('#number');

let currentOperand = ''; // Variable to store the current operand
let currentOperator = ''; // Variable to store the current operator
let prevOperand = ''; // Variable to store the previous operand

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let input = e.target.textContent;

        // Check if the input is a number or operator
        if (!isNaN(input) || input === '.') {
            // If input is a number or decimal point, append it to the current operand
            currentOperand += input;
            number.textContent = currentOperand;
        } else if (input === 'C') {
            // Clear the screen
            number.textContent = '0';
            currentOperand = '';
            currentOperator = '';
            prevOperand = '';
        } else if (input === '=') {
            // Perform calculation when equals sign is clicked
            calculate();
        } else {
            // If input is an operator
            if (prevOperand === '') {
                // If there's no previous operand, set it to the current operand
                prevOperand = currentOperand;
                currentOperand = '';
            } else if (currentOperand !== '') {
                // If there's a previous operand and a current operand, perform calculation
                calculate();
            }
            currentOperator = input;
        }
    });
});

function calculate() {
    let result;
    switch (currentOperator) {
        case '+':
            result = parseFloat(prevOperand) + parseFloat(currentOperand);
            break;
        case '-':
            result = parseFloat(prevOperand) - parseFloat(currentOperand);
            break;
        case '*':
            result = parseFloat(prevOperand) * parseFloat(currentOperand);
            break;
        case '/':
            result = parseFloat(prevOperand) / parseFloat(currentOperand);
            break;
        default:
            return;
    }
    // Display the result
    number.textContent = result;
    // Reset operands and operator
    currentOperand = result.toString();
    currentOperator = '';
    prevOperand = '';
}
