const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
e.preventDefault();


const height = parseFloat(document.querySelector('#height').value);
const weight = parseFloat(document.querySelector('#weight').value);

const result = document.querySelector('#results');

// Validate height
if (isNaN(height) || height <= 0) {
    result.innerHTML = 'Please enter a valid height';
    return;
}

// Validate weight
if (isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please enter a valid weight';
    return;
}

// Calculate BMI
const bmi = (weight / ((height * height) / 10000)).toFixed(2);

// Display BMI category
if (bmi < 18.5) {
    result.innerHTML = `BMI: ${bmi}, so you are underweight`;
} else if (bmi < 25) {
    result.innerHTML = `BMI: ${bmi}, so you are in the normal range`;
} else {
    result.innerHTML = `BMI: ${bmi}, so you are overweight`;
}


});
