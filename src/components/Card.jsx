import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title , description , price , src , id , btn}) => {
  const navigate = useNavigate();
  function singleProductPage() {
    navigate(`singleProduct/${id}`)
  }
  return (
    <div className="card w-96 bg-white shadow-xl">
  <figure><img src={src} className='h-[250px]' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-gray-700">
      {title}
    </h2>
    <p className=' text-gray-700'>{description}...</p>
    <div className="card-actions justify-end items-center">
      <div className="badge badge-outline p-4 text-black">${price}</div> 
      <button onClick={singleProductPage} className="btn btn-primary">{btn}</button>
    </div>
  </div>
</div>
  )
}

export default Card