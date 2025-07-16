import React from 'react';
import RecipeCard from '../components/RecipeCard';

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem('fav') || "[]");

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        Your Favourite Recipes
      </h1>

      {favorite.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {favorite.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">
          You haven't added any favorites yet.
        </p>
      )}
    </div>
  );
};

export default Fav;
