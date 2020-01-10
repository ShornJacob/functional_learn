export default {
   //Cannot read property 'results' of null
   // get : jest.fn( () => Promise.resolve({data : null}))

   //return response.data.results
   //undefined
   // get : jest.fn( () => Promise.resolve({data : {}}))

   get: jest.fn().mockResolvedValue({
      data: {}
   })
}

//Axios resolves with an object that has a data property


//https://www.youtube.com/watch?v=9Yrd4aZkse8. 7.52