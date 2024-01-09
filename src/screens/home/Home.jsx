import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

const Home = () => {
  const [data , setData] = useState([]);
  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
    // console.log(res.data);
    setData(res.data)
  }).catch((err)=>{
    console.log(err);
  })
  return (
    <>
    <div className=' flex justify-evenly flex-wrap gap-8 p-5 bg-white pt-10'>
    {data.length > 0 ? data.map((item)=>{
     return <Card key={item.id} title={item.title} src={item.image} description={item.description.slice(0 , 50)} price={item.price}/>

    }) : <div className=' flex justify-center'><span className="loading loading-dots loading-lg mt-11"></span></div> }
    </div>
    </>
  )
}

export default Home