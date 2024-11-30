function calculateBMI() {
    const form = document.forms['bmiForm'];

    const weight = parseFloat(form['weight'].value);
    const height = parseFloat(form['height'].value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Iltimos, to‘g‘ri sonlarni kiriting!';
        return;
    }

    const bmi = weight / (height * height);

    let status = '';
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'normal weight';   
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'overweight';
    } else {
        status = 'obesity';
    }

    document.getElementById('result').innerText = `BMI is ${bmi.toFixed(1)}, it is ${status}.`;
}
