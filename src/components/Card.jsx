import React from 'react'

const Card = ({title , description , price , src}) => {
  return (
    <div className="card w-96 bg-white shadow-xl">
  <figure><img src={src} className='h-[250px]' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-gray-700">
      {title}
    </h2>
    <p className=' text-gray-700'>{description}...</p>
    <div className="card-actions justify-end items-center">
      <div className="badge badge-outline p-4 text-black">{price} $</div> 
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card