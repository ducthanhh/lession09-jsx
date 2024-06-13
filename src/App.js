import React, { Component, useState, useEffect } from 'react'
import NLDTProductList from './component/NLDTproductList'
import axios from "axios";

export default function App() {
  const [NLDTProductList, setNLDTProductList] = useState([]);

  const nldtGetstudent = async () => {
    try {
      const response = await axios.get("https:// 666a53887013419182cee024 .mockapi.io /api/nldt / nldtStudent");
      setNLDTProductList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    nldtGetstudent();
  }, []);

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>xu ly chuc nang crud -hook -api</h1>
      <hr />
      < NLDTProductList renderNLDTProductList={NLDTProductList} />
    </div>
  )
}