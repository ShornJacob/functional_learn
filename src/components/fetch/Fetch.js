import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Fetch({url}) {

    const [data,setData] = useState(null)

    //Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects
    //By using this Hook, you tell React that your component needs to do something after render.
    //React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
    //useEffect runs after every render


    //If your effect returns a function, React will run it when it is time to clean up
    // //React performs the cleanup when the component unmounts.

    //You can tell React to skip applying an effect if certain values haven’t changed between re-renders. 
    //To do so, pass an array as an optional second argument to useEffect:
    useEffect( ()=> {
        // let statement declares a block scope local variable,
        //const the let does not create properties of the window object
        //React also cleans up effects from the previous render before running the effects next time.
        let mounted =true

        const loadData = async () => {
            const response = await axios.get(url)

            if (mounted) {
                setData(response.data)
            }
        }

        loadData()

        return () => {
            mounted = false
        }
    },
    [url]
    )


    //https://stackoverflow.com/questions/5101948/javascript-checking-for-null-vs-undefined-and-difference-between-and
    //// `a` is falsey, which includes `undefined` and `null`
    // (and `""`, and `0`, and `NaN`, and [of course] `false`)

    //undefined is the default value of variables untill they are assigned
    //as the value of function arguments that weren't provided when the function was called,
    //nd as the value you get when you ask an object for a property it doesn't have

    //null is slightly more specific than undefined: It's a blank object reference. 

    if (!data) {
        return  <span data-testid="loading">Loading data...</span>
    }

    return (
      <span data-testid="resolved">{data.greeting}</span>
    )
}

