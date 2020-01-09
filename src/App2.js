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
 //gets a functions, returns another function
 //higer order component - takes care of the logic to - smart one
 //https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
//  const withFilterProps = BaseComponent => ({list,side}) => {
//     const transformedProps = list.filter(char => char.side === side)
//     return <BaseComponent list={transformedProps} />
//  }

 //more generel
 //first argument function
// const withTransformProps = transformFunc => {
//     const ConfiguredComponent = BaseComponent => {
//         return baseProps => {
//             const transformedProps = transformFunc(baseProps)
//             return <BaseComponent {...transformedProps} />
//         }
//     }
//configured component will have transofrmationfucntion responsibloe for filtering inside a closure
//but it still required BaseCompnent
//    return ConfiguredComponent
//}

const withTransformProps = mapperFunc =>
  BaseComponent => baseProps => {
      const transformedProps = mapperFunc(baseProps)
      return <BaseComponent {...transformedProps} />
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

 //const FilteredList = withFilterProps(renderDisplayList)
  //base component will take care for the ui - dump one
 const FilteredList = withTransformProps(
     ({list,side}) => ({
         list : list.filter(char => char.side ===side)
 }))(renderDisplayList)
//first is configurationfunction, responsible  for filtering
//withtransformProps returns a function, that has the tranformation function has a closure
//that function will be called with renderDisplayList
//we get back a function that reuires baseProps, that is the FilteredList
//baseprops is an obkect with list and side

console.log(FilteredList)

 //we are using a function returned from a function, FilteredList
 //enhanced renderdisplayprops wit withfilterProps
 //this makes renderDipslayList reusable
  return (
    <FilteredList list={starWarsChars} side="dark"/>
  );
}

export default App;


//const HoC = config => BaseComponent =>enhancedComponent

//https://www.youtube.com/watch?v=jAsU-FejzIE