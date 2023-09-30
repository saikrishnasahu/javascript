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

outputResult(currentResult, as);
