import React from 'react';
import { Link } from 'react-router-dom';

const ShotCard = ({ shot }) => {
  return (
    <Link to={`shotDetails/${shot.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={shot.images.normal}
          alt={shot.title}
          className="w-full h-auto object-cover"
        />
        <h3 className='text-3xl py-5 px-3'>{shot.title}</h3>
      </div>
    </Link>
  );
};

export default ShotCard;
