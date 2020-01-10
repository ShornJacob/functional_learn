import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Fetch from "../Fetch";
import mockAxios from "axios";

//https://github.com/facebook/react/issues/14769#issuecomment-462337934
//silencing console errors
// const originalError = console.error;

// beforeAll(() => {
//   console.error = jest.fn();
// });

// afterAll(() => {
//   console.error = originalError;
// });

//React Testing Library, helpers are wrapped with act().
//used globally
afterEach(cleanup);

//act(() => {
/* fire events that update state */
//   });
/* assert on the output */

//no await in the test, so not waited
////https://github.com/testing-library/react-testing-library/issues/281#issuecomment-520435502
  // Then the waiting is built in findBy* queries.


//before useeffect kins in
test("fecthed and display data", async () => {

    //override global mock resolved values
    mockAxios.get.mockResolvedValueOnce( {
        data : {
            greeting : "hello there"
        }
     })
     
  const url = `/greeting`;

  const { getByTestId } = render(<Fetch url={url} />);
 
  //before use efect kinks in
  expect(getByTestId('loading')).toHaveTextContent(`Loading data...`)

  //after useEffect kicksin

  const resolvedSpan = await waitForElement(  ()=> getByTestId('resolved'))
  expect(resolvedSpan).toHaveTextContent("hello there")
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(url)
});



//the dom output
//const {debug}
//await waitForDomchange()

//getbyText throws if it cannot find

//fireEvent.click()
//fireEvent.change(todoInput, { target : { value : "cc"}})

//cuple of dom changes, use wait for element//untill thro or times out