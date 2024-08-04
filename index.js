document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
  
    if (isNaN(inputValue)) {
      displayResult('Invalid input. Please enter a valid number.');
      return;
    }
  
    let convertedValue;
  
    if (inputUnit === outputUnit) {
      convertedValue = inputValue;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Fahrenheit') {
      convertedValue = (inputValue * 9/5) + 32;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Kelvin') {
      convertedValue = inputValue + 273.15;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Celsius') {
      convertedValue = (inputValue - 32) * 5/9;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Kelvin') {
      convertedValue = (inputValue - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Celsius') {
      convertedValue = inputValue - 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Fahrenheit') {
      convertedValue = (inputValue - 273.15) * 9/5 + 32;
    }
  
    displayResult(`Converted value: ${convertedValue.toFixed(2)} ${outputUnit}`);
  });
  
  function displayResult(message) {
    document.getElementById('result').textContent = message;
  }
  