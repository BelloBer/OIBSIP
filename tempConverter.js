function convertTemperature() {
    let temperatureInput = document.getElementById("temperatureInput").value;
    let unitSelect = document.getElementById("unitSelect").value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number.");
        return;
    }

    temperatureInput = parseFloat(temperatureInput);

    let celsiusOutput = document.getElementById("celsius");
    let fahrenheitOutput = document.getElementById("fahrenheit");
    let kelvinOutput = document.getElementById("kelvin");

    if (unitSelect === "celsius") {
        let fahrenheit = (temperatureInput * 9/5) + 32;
        let kelvin = temperatureInput + 273.15;
        celsiusOutput.value = temperatureInput.toFixed(2);
        fahrenheitOutput.value = fahrenheit.toFixed(2);
        kelvinOutput.value = kelvin.toFixed(2);
    } else if (unitSelect === "fahrenheit") {
        let celsius = (temperatureInput - 32) * 5/9;
        let kelvin = (temperatureInput - 32) * 5/9 + 273.15;
        celsiusOutput.value = celsius.toFixed(2);
        fahrenheitOutput.value = temperatureInput.toFixed(2);
        kelvinOutput.value = kelvin.toFixed(2);
    } else if (unitSelect === "kelvin") {
        let celsius = temperatureInput - 273.15;
        let fahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
        celsiusOutput.value = celsius.toFixed(2);
        fahrenheitOutput.value = fahrenheit.toFixed(2);
        kelvinOutput.value = temperatureInput.toFixed(2);
    }
}
