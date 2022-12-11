let output = document.getElementById("calculate");
let operation = document.querySelector("#operate");
let equles = document.querySelector("#equle");
let result = document.getElementById("calculateResult");
let type = "";

const cleanall = () => {
   output.value = "";
};

const cleanlastone = () => {
   output.value = output.value.slice(0, -1);
};
// equles.addEventListener("click", equle);

// calculate 2

const ShtoD = () => {
   let shekel = output.value * 0.29;
   shekel = Math.round(shekel);
   result.innerHTML = shekel + " " + "Doller";
   console.log(shekel);
};
const DtoSh = () => {
   let doller = output.value * 3.42;
   doller = Math.round(doller);
   result.innerHTML = doller + " " + "Shekel";
   console.log(doller);
};
const ShtoE = () => {
   let shekel = output.value * 0.28;
   shekel = Math.round(shekel);
   result.innerHTML = shekel + " " + "Euro";
   console.log(shekel);
};

const EtoSh = () => {
   let euro = output.value * 3.6;
   euro = Math.round(euro);
   result.innerHTML = euro + " " + "Shekel";
   console.log(euro);
};
