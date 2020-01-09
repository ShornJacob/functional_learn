import mockAxios from 'axios'
import unsplash from "../unsplash.js"

////the function that needs to be imported here
//since axios is mocked, we get a different axios


test("calls axios and returns images" ,async () => {

    //setup
    //we get this because get returns a mock funcfion
    //console.log ,  [ 'cute.jpg' ]
    mockAxios.get.mockImplementationOnce( ()=> Promise.resolve({
        data : {
            results : ['cute.jpg']
        }
    }))


    //act
    const images = await unsplash('kittens')

    //assert
    //Promise { <pending> }
    //await returns a promise
    // console.log(images)
    expect(images).toEqual(['cute.jpg'])
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith("https://api.unsplash.com/search/photos",{"params": {"client_id": undefined, "query": "kittens"}} )
} )

//async functions returns a promise
//make tests async too