let showresult = document.getElementById("result");
let btnClear = document.getElementById("clear");
let typeFucn = "";
var numbers = { lastNum: null, newNum: null, total: null };
var isLastNumber = false;
let values = (number) => {
   var results;
   if (isLastNumber) {
      if (numbers.newNum) {
         results = numbers.newNum + "" + number;
         numbers.newNum = results;
         showresult.value = results;
      } else {
         results = numbers.lastNum + "" + number;
         numbers.lastNum = results;
         showresult.value = results;
      }
   } else {
      showresult.value = number;
      if (numbers.lastNum) {
         numbers.newNum = number;
      } else {
         numbers.lastNum = number;
      }
      isLastNumber = true;
   }
};
let operations = (operate) => {
   typeFucn = operate;
   isLastNumber = false;
};
const clear = () => {
   showresult.value = "";
};
const deleted = () => {
   showresult.value = showresult.value.slice(0, -1);
};
let functionOperat = () => {
   if (!numbers.newNum) {
      return;
   }
   if (numbers.lastNum && numbers.newNum && typeFucn) {
      if (typeFucn === "+") {
         let newvalue = Number(numbers.lastNum) + Number(numbers.newNum);
         showresult.value = newvalue;
         numbers.lastNum = newvalue;
         console.log(numbers.lastNum + numbers.newNum);
      }
      ///////////////
      if (typeFucn === "-") {
         let newvalue = Number(numbers.lastNum) - Number(numbers.newNum);
         showresult.value = newvalue;
         numbers.lastNum = newvalue;
         console.log(numbers.lastNum - numbers.newNum);
      }
      //////////////////////////
      if (typeFucn === "*") {
         let newvalue = Number(numbers.lastNum) * Number(numbers.newNum);
         showresult.value = newvalue;
         numbers.lastNum = newvalue;
         console.log(numbers.lastNum * numbers.newNum);
      }
      //////////////////
      if (typeFucn === "/") {
         let newvalue = Number(numbers.lastNum) / Number(numbers.newNum);
         showresult.value = newvalue;
         numbers.lastNum = newvalue;
         console.log(numbers.lastNum / numbers.newNum);
      }
   }
   isLastNumber = false;
};
btnClear.addEventListener("click", clear);
