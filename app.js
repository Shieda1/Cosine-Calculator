// https://calculator.swiftutors.com/cosine-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cosineAngleRadio = document.getElementById('cosineAngleRadio');
const adjacentAngleRadio = document.getElementById('adjacentAngleRadio');
const hypotenuseAngleRadio = document.getElementById('hypotenuseAngleRadio');

let cosineAngle;
let adjacentAngle = v1;
let hypotenuseAngle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

cosineAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Adjacent Angle';
  variable2.textContent = 'Hypotenuse Angle';
  adjacentAngle = v1;
  hypotenuseAngle = v2;
  result.textContent = '';
});

adjacentAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Cosine Angle';
  variable2.textContent = 'Hypotenuse Angle';
  cosineAngle = v1;
  hypotenuseAngle = v2;
  result.textContent = '';
});

hypotenuseAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Cosine Angle';
  variable2.textContent = 'Adjacent Angle';
  cosineAngle = v1;
  adjacentAngle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cosineAngleRadio.checked)
    result.textContent = `Cosine Angle = ${computeCosineAngle().toFixed(2)}`;

  else if(adjacentAngleRadio.checked)
    result.textContent = `Adjacent Angle = ${computeAdjacentAngle().toFixed(2)}`;

  else if(hypotenuseAngleRadio.checked)
    result.textContent = `Hypotenuse Angle = ${computeHypotenuseAngle().toFixed(2)}`;
})

// calculation

function computeCosineAngle() {
  return Number(adjacentAngle.value) / Number(hypotenuseAngle.value);
}

function computeAdjacentAngle() {
  return Number(cosineAngle.value) * Number(hypotenuseAngle.value);
}

function computeHypotenuseAngle() {
  return Number(adjacentAngle.value) / Number(cosineAngle.value);
}