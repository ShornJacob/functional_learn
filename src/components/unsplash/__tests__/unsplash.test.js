import unsplash from "../unsplash.js"

test("calls axios and returns images" ,async () => {
    const images = await unsplash('kittens')

    //Promise { <pending> }
    //await returns a promise
    console.log(images)
} )

//async functions returns a promise
//make tests async too