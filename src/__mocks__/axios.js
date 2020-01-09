export default {
   //Cannot read property 'results' of null
   // get : jest.fn( () => Promise.resolve({data : null}))

   //return response.data.results
   //undefined
   get : jest.fn( () => Promise.resolve({data : {}}))
}

//Axios resolves with an object that has a data property