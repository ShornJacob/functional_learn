import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react';
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