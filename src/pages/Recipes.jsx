import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        Explore Delicious Recipes
      </h1>

      {data.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No recipes found.</p>
      )}
    </div>
  );
};

export default Recipes;
