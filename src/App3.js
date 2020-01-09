//npm install --save-dev @testing-library/react


//https://testing-library.com/docs/react-testing-library/intro
//https://reactjs.org/docs/test-renderer.html
//This package provides a React renderer that can be used to render React components to pure JavaScript objects, 
//without depending on the DOM or a native mobile environment.

//npm install --save-dev @testing-library/jest-dom
//The @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
//npm install --save-dev @testing-library/react react-test-renderer @testing-library/jest-dom
import React from 'react'
import Button from './components/button/button'

function App() {
    return (
        <div>
            <header>
                <Button label="clck me please"></Button>
            </header>
        </div>
    )
}