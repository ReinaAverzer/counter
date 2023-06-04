"use strict"

import {COEFFICIENTS, COEFFICIENTS_FOR_N} from './constants.js';
import {parameters, calculateCalories} from './util.js';
  


function showResults(result) {
  const caloriesNorm = counterResult.querySelector('#calories-norm');
  const caloriesMin = counterResult.querySelector('#calories-minimal');
  const caloriesMax = counterResult.querySelector('#calories-maximal');

  function insertingResults() {
    caloriesNorm.textContent = result.weightNormal;
    caloriesMin.textContent = result.weightLoss;
    caloriesMax.textContent = result.weightGain;
  }

  if (!counterResult.classList.contains('counter__result--hidden')) {
    insertingResults();
  } else {
    insertingResults();
    counterResult.classList.remove('counter__result--hidden')
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let calories = calculateCalories(getParameters());

  buttonResult.blur();
  showResults(calories);
  counterResult.scrollIntoView()
})

form.addEventListener('reset', () => {
  counterResult.classList.add('counter__result--hidden');
  buttonResult.disabled = true;
  buttonReset.disabled = true;
  window.scroll(0, 0)
});
