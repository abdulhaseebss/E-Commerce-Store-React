import React from 'react'
import { useNavigate } from 'react-router-dom'
import useSavePost from '../context/savePost';
import { useState } from 'react';

const Card = ({title , description , price , src , id , btn}) => {

  const { savePost, setSavePost } = useSavePost();

  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  
  function singleProductPage() {
    navigate(`singleProduct/${id}`)
  }


  const savePostToContext = (event) => {
    event.stopPropagation()
    setCounter(counter + 1);
    console.log(counter);
    
    // setSavePost([...savePost])
    // navigate(`cart/${id}`)
  }
  return (
    <div className="card w-96 bg-white shadow-xl cursor-pointer"  onClick={singleProductPage}>
  <figure><img src={src} className='h-[250px]' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-gray-700">
      {title}
    </h2>
    <p className=' text-gray-700'>{description}...</p>
    <div className="card-actions justify-end items-center">
      <div className="badge badge-outline p-4 text-black">${price}</div> 
      <button onClick={savePostToContext} className="btn btn-primary">{btn}</button>
    </div>
  </div>
</div>
  )
}

export default Card