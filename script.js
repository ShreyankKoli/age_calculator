const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateButton = document.getElementById('calculate');
const yearsOutput = document.getElementById('years');
const monthsOutput = document.getElementById('months');
const daysOutput = document.getElementById('days');

calculateButton.addEventListener('click', () => {
    const birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    const today = new Date();

    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    const remainingDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const remainingMonths = Math.floor(remainingDays / 30);
    const remainingDaysInMonths = remainingDays % 30;

    yearsOutput.textContent = ageInYears + ' years';
    monthsOutput.textContent = remainingMonths + ' months';
    daysOutput.textContent = remainingDaysInMonths + ' days';
});