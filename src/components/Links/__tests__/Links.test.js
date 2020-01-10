import React from 'react'
import { render,cleanup } from '@testing-library/react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'
import '@testing-library/jest-dom/extend-expect'
import Links from '../Links'

//https://github.com/testing-library/testing-library-docs/blob/master/docs/example-reach-router.md
//second argunet is destructured
//https://stackoverflow.com/questions/59297023/testing-reach-router-with-react-testing-library
//when destrucuring, default values can be given if not found

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//const {a = 10, b = 5} = {a: 3};
//Setting a function parameter's default value

function renderWithRouter(
    ui,
    { route = '/', history = createHistory(createMemorySource(route)) } = {}
  ) {
    return {
      ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      history,
    }
  }

  afterEach(cleanup)

  test('full app rendering/navigating', async () => {
    const {
        getByText,
      history: { navigate },
    } = renderWithRouter(<Links />)

    // normally I'd use a data-testid, but just wanted to show this is also possible
    // expect(appContainer.innerHTML).toMatch('You are home')
  
    // with reach-router we don't need to simulate a click event, we can just transition
    // to the page using the navigate function returned from the history object.
    await navigate('/about')
    expect(getByText("You are on the about page")).toBeInTheDocument()

    await navigate('/')
    expect(getByText("You are home")).toBeInTheDocument()
  })

  //https://testing-library.com/docs/react-testing-library/api
  //https://testing-library.com/docs/react-testing-library/api#render
  //The render method returns an object that has a few properties:
  //The most important feature of render is that the queries from DOM Testing Library are automatically returned

  //https://testing-library.com/docs/dom-testing-library/api-queries
  //https://testing-library.com/docs/guide-disappearance