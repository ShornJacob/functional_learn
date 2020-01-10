import React from 'react'
import { render,cleanup,fireEvent } from '@testing-library/react'
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

afterEach(cleanup)

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
    // expect(getByText("You are home")).not.toBeInTheDocument() throes because not found

    await navigate('/')
    expect(getByText("You are home")).toBeInTheDocument()
    // expect(getByText("You are on the about page")).not.toBeInTheDocument() throws becaus enot found
  })

  //https://testing-library.com/docs/react-testing-library/api
  //https://testing-library.com/docs/react-testing-library/api#render
  //The render method returns an object that has a few properties:
  //The most important feature of render is that the queries from DOM Testing Library are automatically returned

  //https://testing-library.com/docs/dom-testing-library/api-queries
  //https://testing-library.com/docs/guide-disappearance

  
  test('navigating to about on click', async () => {
    const {
        debug,
        getByText,
      history: { navigate },
    } = renderWithRouter(<Links />)



    await navigate('/')
    const el = getByText("about")
    expect(el).toBeInTheDocument()


    fireEvent.click(el)

 
    debug()
    // expect(getByText("You are on the about page")).not.toBeInTheDocument() 

   
  })


  //still in about page, navigae not working in test
  //https://stackoverflow.com/questions/59298020/testing-navigate-of-reach-router-with-react-testing-library
  //https://testing-library.com/docs/react-testing-library/api#debug

//   <body>
//       <div>
//         <div>
//           <a
//             aria-current="page"
//             href="/"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//           >
//             About
//           </a>
//           <div
//             role="group"
//             style="outline: none;"
//             tabindex="-1"
//           >
//             <div>
//               <span>
//                 You are home
//               </span>
//               <a
//                 href="/about"
//               >
//                 about
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </body>