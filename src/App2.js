import React from 'react';
import './App.css';

function App() {

//  const numbers = [1,5,8,10,21]

 //HOF , creates a function by taking the number parameter, that is waiting for an arr
 const createAddingFunction = number => arr => arr.map(num => num + number)

 const numbersPlusOne = createAddingFunction(1)

console.log(numbersPlusOne)
 //composition

 const number = 15
 const increment = num => num + 5
 const decrement = num => num - 3
 const multiply = num => num * 2

 // <--works from right to left
 const operation = increment(decrement(multiply(number)))

 console.log(operation)

 const starWarsChars = [
     { name : 'Luke', side:'light' },
     { name : 'Darth Vader', side:'dark' },
     { name : 'Obi-wan Kenobi', side:'light' },
     { name : 'Palpatine', side:'dark' },
 ]

 const DisplayList = ({list}) => <div>
     {list.map(char =>
     <div key={char.name}>
         <div>Character : {char.name}</div>
         <div>Side: {char.side}</div>
     </div>
     )}
 </div>

  return (
    <DisplayList list={starWarsChars}/>
  );
}

export default App;
