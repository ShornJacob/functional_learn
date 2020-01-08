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

 //higherorder functions
 //https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
 const withFilterProps = BaseComponent => ({list,side}) => {
    const transformedProps = list.filter(char => char.side === side)
    return <BaseComponent list={transformedProps} />
 }

 const renderDisplayList = ({list,side}) => { 
 return (
 <div>
     {list.map(char =>
     <div key={char.name}>
         <div>Character : {char.name}</div>
         <div>Side: {char.side}</div>
     </div>
     )}
 </div> ) }

 const FilteredList = withFilterProps(renderDisplayList)

 console.log(FilteredList)

  return (
    <FilteredList list={starWarsChars} side="dark"/>
  );
}

export default App;
