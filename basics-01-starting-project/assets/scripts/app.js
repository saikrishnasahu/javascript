// alert('This Works !!');
// let userName = 'Sai';
// userName = 'Sai 1';
// const as = 'some';
// cannot be changed
// as = 7;

// allowed names
// userName
// userName3
// $userName
// _userName
// user_name (not recommended)

// not allowed names
// user-nam
// let

const defaultResult = 0;

let currentResult = defaultResult;
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// can be any of theses
// let as = "(" + defaultResult + " + 10) * 3 / 2 - 1";
// template literal
let as = `(${defaultResult} + 10) * 3 / 2 - 1`;
// can add line breaks
// as = `A

// C
// B`
// let as = `(${0 + 0} + 10) * 3 / 2 - 1`;

// line breaks for normal also known as escpae character
// let error = "An error \n"
// +"occured"

// let error = "An error \""+"\\occured"
// let as = '"(" + defaultResult + " + 10) * 3 / 2 - 1"';

// variables should be initialized before using but function need not.
// global can be accessed in function but local which are inside cannot be outside
// When referring to currentResult inside of the add function we now always refer to the local, shadowed variable.
// Only if no such local variable existed, JavaScript would fall back to the global variable.
// function add(num1, num2) {
//   let currentResult = 0;
//   const result = num1 + num2;

//   return result;
//   //   code written after return doesn't work
//   alert("The result is " + result);
//   return 1;
// }

// currentResult = add(1, 2);
// // can pass one as well no error
// add(1);

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, as);
}

// to this function we just pass the address of function and if we do add() then it is executed immedeately
addBtn.addEventListener("click", add);

// this executes initially but above one on button click so move it to function
outputResult(currentResult, as);
