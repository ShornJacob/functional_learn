import React from 'react'
import { render, cleanup } from '@testing-library/react';
import Button from '../button'
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer"

afterEach(cleanup)

test("renders button correctly", ()=> {
    const { getByTestId } = render(<Button label="Click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click me")
})

test("renders button correctly", ()=> {
    const { getByTestId } = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
})

test("mastchessnapshot 1", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})

test("mastchessnapshot 2", () => {
    const tree = renderer.create(<Button label="save me"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})