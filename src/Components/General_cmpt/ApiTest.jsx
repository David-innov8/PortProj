import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct,selectData } from "../../Redux/Reducers/fetchSlice";
// import { useQuery } from "react-query";

function ApiTest() {
  const data = useSelector(selectData)
  // const { isLoading, data } = useQuery('products');
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(fetchProduct());
  }, [dispatch])



  console.log(data)
  return (
    <section>
      <h1>Fake Shop API response:</h1>
      {data.loading ? (
        <ClipLoader />
      ) : (
        <div>
          
        </div>
      )}
    </section>
  );
}

export default ApiTest;
