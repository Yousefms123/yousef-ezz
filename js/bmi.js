let heightInput = document.querySelector("#hight");
let weightInput = document.querySelector("#weight");
let calculateButton = document.querySelector("#calc");
let result = document.querySelector("#result");
let statement = document.querySelector("#statement");
let BMI, height, weight;

const calculate = () => {
   height = heightInput.value;
   weight = weightInput.value;
   BMI = weight / ((height * height) / 10000);
   result.innerText = BMI;

   if (BMI <= 18.5) {
      statement.innerHTML = "the underweight range";
   } else if (BMI >= 18.6 && BMI <= 24.9) {
      statement.innerHTML = "the normal or healthy weight range";
   } else if (BMI >= 25 && BMI <= 29.9) {
      statement.innerHTML = "the overweight range";
   } else if (BMI >= 30) {
      statement.innerHTML = "the obese range";
   }
};
calculateButton.addEventListener("click", calculate);
