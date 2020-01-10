import React from 'react'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Clickers from '../Clickers'

afterEach(cleanup)

test("displays count" , ()=>{
    const { getByTestId } = render(<Clickers />)
    expect(getByTestId("count")).toHaveTextContent("0")
})

test("incremnets count" , ()=>{
    const { getByTestId, getByText } = render(<Clickers />)
    fireEvent.click(getByText("Up"))
    expect(getByTestId("count")).toHaveTextContent("1")
})

//first convert it to be async
test("decrements count async" , async ()=>{
    const { getByTestId, getByText } = render(<Clickers />)
    fireEvent.click(getByText("Down"))

    //pass as arrow function to waitForelement
    //keep waiting untill you find the text
    //wait for it
    const count =  await waitForElement( () => getByText("-1"))

    //waits for less than jest test time

    expect(count).toBeInTheDocument()
    
})

//the dom output
//const {debug}
//await waitForDomchange()

//getbyText throws if it cannot find

//fireEvent.click()
//fireEvent.change(todoInput, { target : { value : "cc"}})

//cuple of dom changes, use wait for element//untill thro or times out