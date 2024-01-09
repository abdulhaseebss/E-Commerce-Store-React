import React from "react";

const Card2 = ( {src , title , description , price }) => {
  return (
    <div className="main-div flex justify-center">
    <div className="card lg:card-side bg-white shadow-xl mt-6 w-[90%] p-5">
    
        <img className=" h-[300px]" src={src} alt="Album"/>
    
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        <p className=" text-black">{description}</p>
        <div className="card-actions justify-end items-center">
          <div className="badge badge-outline p-4 text-black">${price}</div> 
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card2;
