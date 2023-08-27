// @ts-nocheck
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* Button convert  */

const buttonConvert = document.getElementById("convert-btn");

buttonConvert.addEventListener("click", function () {
  /* Input Value */

  let inputValue = document.getElementById("convert-input").value;
  inputValue = Number(inputValue);

  //console.log(inputValue, typeof inputValue)
  meterFeet(inputValue);
  literGallon(inputValue);
  kiloPounds(inputValue);
});

/* Variables to render in paragraphs */

let lengthP = document.getElementById("length-p");
let volumeP = document.getElementById("volume-p");
let massP = document.getElementById("mass-p");

/* Functions to convert Units */

/* Function Length */
function meterFeet(inputValue) {
  let value = inputValue;
  let meter = 0.3048; // meter
  let feet = 3.281; //feet

  let feetConversion = value * feet;
  let meterConversion = value * meter;

  let meterFeet = `<p>${value} meters = ${feetConversion.toFixed(
    3
  )} feet | ${value} feet = ${meterConversion.toFixed(3)} meters </p>`;

  lengthP.innerHTML = meterFeet;
}

/* Function Volume */
function literGallon(inputValue) {
  let value = inputValue;
  let liter = 0.264172; // liter
  let gallon = 0.264; //gllon

  let gallonConversion = value * gallon;
  let literConversion = value * liter;

  let literGallon = `<p>${value} liters = ${gallonConversion.toFixed(
    3
  )} gallons| ${value} gallons = ${literConversion.toFixed(3)} liters</p>`;

  volumeP.innerHTML = literGallon;

  //  console.log(inputValue)
}
//literGallon()

/* Function Mass */
function kiloPounds(inputValue) {
  let value = inputValue;
  let kilos = 2.204; // kilos
  let pounds = 0.45359237; // pounds

  let poundConversion = value * kilos;
  let kiloConversion = value * pounds;

  let kiloPounds = `<p>${value} kilos = ${poundConversion.toFixed(
    3
  )} pounds | ${value} pounds = ${kiloConversion.toFixed(3)} kilos</p>`;

  massP.innerHTML = kiloPounds;

  //console.log(inputValue)
}

//kiloPounds()

/* Function to render the results */
/* function render(meters) {
     
     lengthP.innerHTML = meters;

      volumeP.innerHTML = volumeConv 
     mass.innerHTML = massBtn  
     
     //console.log(lengthBtn)
} */
