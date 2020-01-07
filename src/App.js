import React from 'react';
import './App.css';

function App() {

  //ES2015 introduced two important new JavaScript keywords: let and const.
  //These two keywords provide Block Scope variables (and constants) in JavaScript.
  //Variables declared with the let keyword can have Block Scope.
  //Redeclaring a variable inside a block will not redeclare the variable outside the block:
  //https://www.w3schools.com/js/js_let.asp


  //https://www.youtube.com/watch?v=6NPfQJJEySY


  let L = [2,3,4]

  let add = item => item + 1
  let sum = (accumulator, currentValue) => accumulator + currentValue;

  //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  //0 is initial value
  //Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array,
  let val = L.map(add).reduce(sum,0)

  console.log(val)

  return (
    <div>Functional Programming 1</div>
  );
}

export default App;
