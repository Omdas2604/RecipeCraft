import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { id, image, title, desc } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="bg-[#1e293b] rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl w-full max-w-[400px]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">{title}</h2>
        <p className="text-gray-300 text-base">
          {desc.slice(0, 120)}...
          <span className="text-yellow-300 font-medium ml-1">more</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
