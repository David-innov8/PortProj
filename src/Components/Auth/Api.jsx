import axios from "axios";
import { useQuery } from "react-query";

export const fetchdata = async () => {
    // axios.get("").then((res) => {
    //   console.log(res.data);
    //   return res.data;
    // });
  
      const response = await axios.get('https://api.escuelajs.co/api/v1/products')
      return response.data
          
  };

  export const fetchProductById =async(id)=>{
   
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        return response.data
            
    
  }