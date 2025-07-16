import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const recipe = data.find((recipe) => String(recipe.id) === params.id);

  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        image: recipe.image,
        desc: recipe.desc,
        ingr: recipe.ingredients,
        inst: recipe.instructions,
        category: recipe.category,
      });
    }
  }, [recipe, reset]);

  if (!recipe) return "Loading...";

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => String(r.id) !== params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    const currentFavs = JSON.parse(localStorage.getItem("fav")) || [];
    const updatedFav = currentFavs.filter((r) => String(r.id) !== params.id);
    localStorage.setItem("fav", JSON.stringify(updatedFav));

    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  const Updatehandler = (updatedRecipe) => {
    const index = data.findIndex((r) => String(r.id) === params.id);
    const copydata = [...data];
    copydata[index] = {
      ...copydata[index],
      ...updatedRecipe,
      ingredients: updatedRecipe.ingr || "",
      instructions: updatedRecipe.inst || "",
    };
    localStorage.setItem("recipes", JSON.stringify(copydata));
    setdata(copydata);
    toast.success("Recipe Updated!");
  };

  const FavHandler = () => {
    let copyfav = [...favorite];
    copyfav.push(recipe);
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnfavHandler = () => {
    const filterfav = favorite.filter((f) => f.id !== recipe?.id);
    setfavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  const isFav = favorite.find((f) => f.id === recipe?.id);

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 flex flex-col md:flex-row p-6 gap-6 relative">
      {/* Favorite Icon */}
      {isFav ? (
        <i
          onClick={UnfavHandler}
          className="absolute right-[53%] top-[11%] text-3xl text-red-500 ri-heart-2-fill cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={FavHandler}
          className="absolute right-[53%] top-[11%] text-3xl text-red-500 ri-heart-2-line cursor-pointer"
        ></i>
      )}

      {/* Recipe Details Section */}
      <div className="w-full md:w-1/2 bg-[#1e293b] p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          {recipe.title}
        </h1>
        <img
          className="h-[30vh] w-full object-cover rounded-md mb-4"
          src={recipe.image}
          alt={recipe.title}
        />

        <div className="space-y-4 text-gray-300 text-sm">
          <div>
            <h3 className="text-yellow-400 font-medium">Description:</h3>
            <p>{recipe.desc}</p>
          </div>

          <div>
            <h3 className="text-yellow-400 font-medium">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {(recipe.ingredients || "").split(",").map((ingr, i) => (
                <li key={i}>{ingr.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-medium">Instructions:</h3>
            <ol className="list-decimal list-inside">
              {(recipe.instructions || "").split(",").map((step, i) => (
                <li key={i}>{step.trim()}</li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-yellow-400 font-medium">Category:</h3>
            <p>{recipe.category}</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form
        className="w-full md:w-1/2 bg-[#1e293b] p-6 rounded-xl shadow-xl space-y-5"
        onSubmit={handleSubmit(Updatehandler)}
      >
        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
          Edit Recipe
        </h2>

        <div>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Recipe title"
            className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          {errors.title && (
            <small className="text-red-400">Title is required</small>
          )}
        </div>

        <div>
          <input
            {...register("image", { required: true })}
            type="url"
            placeholder="Recipe image URL"
            className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          {errors.image && (
            <small className="text-red-400">Image URL is required</small>
          )}
        </div>

        <div>
          <textarea
            {...register("desc", { required: true })}
            placeholder="Recipe description"
            className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
          ></textarea>
          {errors.desc && (
            <small className="text-red-400">Description is required</small>
          )}
        </div>

        <div>
          <textarea
            {...register("ingr", { required: true })}
            placeholder="Ingredients (comma separated)"
            className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
          ></textarea>
          {errors.ingr && (
            <small className="text-red-400">Ingredients are required</small>
          )}
        </div>

        <div>
          <textarea
            {...register("inst", { required: true })}
            placeholder="Instructions (comma separated)"
            className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
          ></textarea>
          {errors.inst && (
            <small className="text-red-400">Instructions are required</small>
          )}
        </div>

        <div>
          <select
            {...register("category", { required: true })}
            className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.category && (
            <small className="text-red-400">Category is required</small>
          )}
        </div>

        <div className="flex gap-4">
          <button
            className="bg-yellow-400 text-black font-medium px-4 py-2 rounded hover:bg-yellow-300 transition"
            type="submit"
          >
            Update Recipe
          </button>
          <button
            onClick={DeleteHandler}
            className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-500 transition"
            type="button"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleRecipe;
