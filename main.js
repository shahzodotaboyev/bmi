function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
  
    if (weight > 0 && height > 0) {
      const bmi = (weight / (height * height)).toFixed(2);
      let category = '';
  
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24.9) category = 'Normal weight';
      else if (bmi < 29.9) category = 'Overweight';
      else category = 'Obesity';
  
      document.getElementById('result').textContent = `Your BMI is ${bmi} (${category})`;
    } else {
      document.getElementById('result').textContent = 'Please enter valid inputs.';
    }
  }
  