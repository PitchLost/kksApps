// On page load
document.addEventListener('DOMContentLoaded', _ => { 
  console.log('DOM loaded!')
})


// Variables: 
const one = document.getElementById('one');
one.value = 1;
const two = document.getElementById('two');
two.value = 2;
const three = document.getElementById('three');
three.value = 3;
const four = document.getElementById('four');
four.value = 4;
const five = document.getElementById('five');
five.value = 5;
const six = document.getElementById('six');
six.value = 6;
const seven = document.getElementById('seven');
seven.value = 7;
const eight = document.getElementById('eight');
eight.value = 8;
const nine = document.getElementById('nine');
nine.value = 9;
const zero = document.getElementById('zero')
zero.value = 0

const calcForm = document.getElementById('calcForm')
// Text Box:
let textBox = document.getElementById('text-box')
let textBoxValue = textBox.value;
// Add a running total for the calculation: 
let new_calc = 0
textBoxValue = new_calc;
const multiply = document.getElementById('multiply')
multiply.value = '*'
const plus = document.getElementById('plus')
plus.value = '+'
const minus = document.getElementById('minus')
minus.value = '-'
const divide = document.getElementById('divide')
divide.value = '/'
const del = document.getElementById('delete')
del.value = ' ' 
const prev_calcs = document.getElementById('prev-calcs') // Get the previous calculations HTML div
const nameBox = document.getElementById('name-box')
let combineNums = []

// Functions: 

function formatNum(num) { 
  console.log('Unformatted number = ',num)
  num = Math.floor(num)
  console.log('Formatted number = ', num)
  return num;
}

// Add a number to the text box
calcForm.addEventListener('submit',e => { 
    e.preventDefault()
})
function add_number(element) { 
    let new_number = element.value; // Make a local new number variable to track what number is being added
    textBox.value = textBox.value += new_number // Update the text box with the new number in it
    new_number = 0 // Reset This variable
}

// Function to calculate the equation: 

// Function to calculate the equation
function calculate() {
  if (textBox.value === '' || nameBox.value === '') {
    alert('Please fill out all the boxes');
    return;
  }

  let answer = eval(textBox.value);
  answer = formatNum(answer)
  let label = nameBox.value;
  createDiv(label, answer, 'addedDivs')
}

// Function to handle click on a calculation result
function combineFunction(num) {
  console.log('Passed Num =', num);
  combineNums.push(num)
}


// Add the total when the button is pressed to combine the numbers
function combineTotal() { 
  console.log(combineNums)
  total = 0 // init the total var back to 0
  for (let k = 0; k < combineNums.length; k++) { 
    total += combineNums[k]
  }
  console.log(total)
  createDiv('Combine', total, 'addedDivs')
  // Reset the values
  total = 0
  combineNums = []
  resetAll() 
}


function createDiv(label, value, HTMLClass) { 
  // Create a new <div> element
let autoObject = document.createElement('div');
let autoLabelDOM = document.createElement('strong');
autoLabelDOM.textContent = label;
let autoValueDOM = document.createElement('p');
autoValueDOM.textContent = value; 
autoObject.appendChild(autoLabelDOM);
autoObject.appendChild(autoValueDOM);
autoObject.className = HTMLClass
prev_calcs.appendChild(autoObject);

 // Add event listener to the new calculation result
 autoObject.addEventListener('click', e => {
  let currentDOM = e.target
  currentDOM.style.backgroundColor = 'aliceblue';
  combineFunction(value); // Pass the answer as an argument to combineFunction
  console.log('Current Item:', autoObject); // Log the clicked element
});
messageBox('New item created!')
}


// Reset function
function resetAll() { 
console.log('resetAll')
total = 0 
combineNums = []
// Select all elements with class 'addedDivs'
let tempDivs = document.querySelectorAll('.addedDivs');

// Loop through each matched element
tempDivs.forEach(div => {
    // Apply the background color style to each element
    div.style.backgroundColor = 'beige';
    console.log(div)
});
messageBox('Unselected all!')
}

function clearAll() { 
prev_calcs.innerHTML = ''
messageBox('Cleared succesfully!')
}

