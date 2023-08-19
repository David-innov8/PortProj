import axios from "axios";

export const fetchdata = async () => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    return response.data;
  } catch (error) {
    // Handle any error that might occur during the API call
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error so React Query can handle it
  }
  
      // const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      // return response.data

      // const response = await axios.get('https://fakestoreapi.com/products')
      // return response.data
          
  };

  export const fetchProductById =async(id)=>{
   
        // const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        // return response.data

        try {
          const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
          return response.data;
        } catch (error) {
          console.error("Error fetching product by ID:", error);
          throw error; // Rethrow the error so React Query can handle it
        }
    
  }