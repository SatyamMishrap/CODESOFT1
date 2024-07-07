document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');
            if (value) {
                display.value += value;
            }
        });
    });

    clearButton.addEventListener('click', function() {
        display.value = '';
    });

    equalsButton.addEventListener('click', function() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    });
});

