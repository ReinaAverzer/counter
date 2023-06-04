import {COEFFICIENTS, COEFFICIENTS_FOR_N} from './constants.js';

let parameters = {}
  
const form = document.querySelector('.form');
const inputGroups = form.querySelectorAll('.inputs-group input');
const buttonResult = form.querySelector('.form__submit-button');
const buttonReset = form.querySelector('.form__reset-button');

const counterResult = document.querySelector('.counter__result');

inputGroups.forEach((input) => {
  input.addEventListener('input', () => {
    checkInputHaveValue() ? buttonReset.disabled = false : buttonReset.disabled = true;

    checkAllInputsHaveValue() ? buttonResult.disabled = false : buttonResult.disabled = true;
  })
})

function checkInputHaveValue() {
  let checkInputs = [];

  inputGroups.forEach((input) => {
    if (input.value !== '') {
      checkInputs.push(input.value);
    }
  })

  return checkInputs.length >= 1 ? true : false;
}

function checkAllInputsHaveValue() {
  let allCheckInputs = [];

  inputGroups.forEach((input) => {
    if (input.value !== '') {
      allCheckInputs.push(input.value);
    }
  })

  return allCheckInputs.length === 3 ? true : false;
}

function getParameters() {
  const gender = document.querySelector('.switcher input:checked').value;
  const age = form.querySelector('#age').value;
  const height = form.querySelector('#height').value;
  const weight = form.querySelector('#weight').value;
  const heading = document.querySelector('.radios-group input:checked').value;

  return parameters = {
    gender,
    age,
    height,
    weight,
    heading,
  }
}

function calculateCalories(parameters) {
  let N = (COEFFICIENTS_FOR_N.weight * parameters.weight) + (COEFFICIENTS_FOR_N.height * parameters.height) - (COEFFICIENTS_FOR_N.age * parameters.age);
  let normal;

  switch (parameters.gender) {
    case 'male':
      N += COEFFICIENTS_FOR_N.man;
      break;
    case 'female':
      N += COEFFICIENTS_FOR_N.woman;
      break;
  }

  switch (parameters.heading) {
    case 'min':
      normal = N * COEFFICIENTS.min
      break;
    case 'low':
      normal = N * COEFFICIENTS.low
      break;
    case 'medium':
      normal = N * COEFFICIENTS.medium
      break;
    case 'high':
      normal = N * COEFFICIENTS.high
      break;
    case 'max':
      normal = N * COEFFICIENTS.max
      break;
  }

  let percents = (normal/100) * 15;

  let weightNormal = (normal).toFixed(0);
  let weightGain = (normal + percents).toFixed(0);
  let weightLoss = (normal - percents).toFixed(0);

  return {
    weightNormal,
    weightGain,
    weightLoss
  }
};

export {parameters, calculateCalories};