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

let logEntires = [];
// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// can be any of theses
// let as = "(" + defaultResult + " + 10) * 3 / 2 - 1";
// template literal
// let as = `(${defaultResult} + 10) * 3 / 2 - 1`;
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

function getUserInput() {
  return parseInt(userInput.value);
}

function calculateAndWriteLog(operator, beforeNumber, givenNumber) {
  const resultDesc = `${beforeNumber} ${operator} ${givenNumber}`;
  outputResult(currentResult, resultDesc);
}

function writeToLog(operator, prevResult, enteredNumber, newResult) {
  const logEntry = {
    operation: operator,
    prevResult: prevResult,
    number: enteredNumber,
    result: newResult,
  };
  logEntires.push(logEntry);
  // console.log(logEntry.operation);
  console.log(logEntires);
}

// object with syntax error
// no ; within object and no =
// const worstPossibleUser = {
//   name = 'Max';
//   age = 30;
// };
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  // same as above
  // currentResult += enteredNumber;
  // both increments
  // return first then increment
  // currentResult++;
  // return increment then first
  // ++currentResult;
  // same as above works for both int and float
  // currentResult = currentResult + +userInput.value;
  // convert to string
  // currentResult.toString()
  calculateAndWriteLog("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  // same as above
  // currentResult -= enteredNumber;
  currentResult = currentResult - enteredNumber;
  calculateAndWriteLog("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  // same as above
  // currentResult *= enteredNumber;
  calculateAndWriteLog("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  // same as above
  // currentResult /= enteredNumber;
  calculateAndWriteLog("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// 3 + '3' => '33'
// 'hi' - 'i' => NaN
// 3 * '3' => 9
// 3 - '3' => 0
// 3 / '3' => 1

// default is both type and value and null is a value
// default when not initialized and null when we set it.
// NaN is a value of type number when we do 3 * "Hi" so it gives NaN

// typeof let's know the type of it.
// typeof 3 gives number
// typeof [] gives object
// type of null gives object

// to this function we just pass the address of function and if we do add() then it is executed immedeately
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// this executes initially but above one on button click so move it to function
// outputResult(currentResult, as);
