//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//Fetch is a web api
//https://developer.mozilla.org/en-US/docs/Web/API

//https://www.npmjs.com/package/axios
//Axios is a library

import axios from "axios"

export default async function unsplash(term) {

    //https://github.com/axios/axios
    //// `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
     
    const response = await axios.get("https://api.unsplash.com/search/photos",
     {
         params : {
             client_id: process.env.UNSPLASH_TOKEN,
             query: term
         }
     }
    )

    //returns a promise 
    return response.data.results
}

//https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7
//The act of providing environment variables is referred to as provisioning
//infrastructure and application levels.

//A common application level tool is dotenv which allows us to load environment variables from a file named .env.
//so keep it out by adding .env to your .gitignore file.

//https://itnext.io/how-to-use-environment-variables-in-node-js-cb2ef0e9574a

//How to use custom environment variables in Node
//Create an .env file.
//Install the dotenv library

//https://www.npmjs.com/package/dotenv
//Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE
//As early as possible in your application, require and configure dotenv.
//require('dotenv').config()


//https://unsplash.com/documentation#creating-a-developer-account
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//https://api.unsplash.com/photos/?client_id=163f38b37bf25d50ac35b76a49cd5dd29c145d4f28463262722421b1b1a62235&query=kittens

//query string
//http://example.com/path/to/page?name=ferret&color=purple

//https://github.com/axios/axios
// `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
//   params: {
//     ID: 12345
//   },


//https://www.youtube.com/watch?v=9Yrd4aZkse8
//Mocking axios in jest