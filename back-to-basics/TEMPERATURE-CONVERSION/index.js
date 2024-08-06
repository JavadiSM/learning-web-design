document.addEventListener("DOMContentLoaded", () => {
    const textBox = document.getElementById("textBox");
    const radiosFrom = document.querySelectorAll("input[name='status']");
    const radiosTo = document.querySelectorAll("input[name='toStatus']");


    // Add event listeners
    textBox.addEventListener('input', convertTemperature);
    radiosFrom.forEach(radio => {
        radio.addEventListener('change', convertTemperature);
    });
    radiosTo.forEach(radio => {
        radio.addEventListener('change', convertTemperature);
    });

    function convertTemperature() {
        let inputNum = Number(textBox.value);
        let from, to;

        // Get the selected 'from' temperature scale  
        radiosFrom.forEach((radio) => {
            if (radio.checked) from = radio.id;
        });

        // Get the selected 'to' temperature scale  
        radiosTo.forEach((radio) => {
            if (radio.checked) to = radio.id;
        });

        if (from && to) {
            let result;

            // Perform the conversion  
            if (from === 'fahrenheit') {
                if (to === 'toKelvin') {
                    result = (inputNum - 32) * 5 / 9 + 273.15;
                } else if (to === 'toCelsius') {
                    result = (inputNum - 32) * 5 / 9;
                } else {
                    result = inputNum; // Same scale  
                }
            } else if (from === 'kelvin') {
                if (to === 'toFahrenheit') {
                    result = (inputNum - 273.15) * 9 / 5 + 32;
                } else if (to === 'toCelsius') {
                    result = inputNum - 273.15;
                } else {
                    result = inputNum; // Same scale  
                }
            } else if (from === 'celsius') {
                if (to === 'toFahrenheit') {
                    result = inputNum * 9 / 5 + 32;
                } else if (to === 'toKelvin') {
                    result = inputNum + 273.15;
                } else {
                    result = inputNum; // Same scale  
                }
            }
            document.getElementById("answer").textContent = `result: ${result}`;
        }
    }
});  