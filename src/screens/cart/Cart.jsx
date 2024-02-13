import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../components/Card'
import Card2 from '../../components/Card2'

const Cart = ({id}) => {
    const params = useParams()
    const [data , setData] = useState(null);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res)=>{
        console.log(res.data);
        setData(res.data)
      }).catch((err)=>{
        console.log(err);
      })
      } , [])
  return (
    <>
    <div className=' flex justify-evenly flex-wrap gap-8 p-5 bg-white pt-10'>
        {data ? <Card2 title={data.title} price={data.price} description={data.description} src={data.image}/> : <div className=' flex justify-center'><span className="loading loading-dots loading-lg mt-11"></span></div> }
    </div>
    </>
  )
}

export default Cart