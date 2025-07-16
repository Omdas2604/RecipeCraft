import { nanoid } from "nanoid";
import React, { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Submithandler = (formData) => {
    formData.id = nanoid();
    const copydata = [...data];
    copydata.push(formData);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
      <form
        className="w-full max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-xl space-y-5"
        onSubmit={handleSubmit(Submithandler)}
      >
        <h1 className="text-2xl font-semibold text-center mb-4">Create New Recipe</h1>

        <div className="space-y-1">
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Recipe title"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.title && <small className="text-red-400">Title is required</small>}
        </div>

        <div className="space-y-1">
          <input
            {...register("image", { required: true })}
            type="url"
            placeholder="Recipe image URL"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.image && <small className="text-red-400">Image URL is required</small>}
        </div>

        <div className="space-y-1">
          <textarea
            {...register("desc", { required: true })}
            placeholder="Recipe description"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          ></textarea>
          {errors.description && <small className="text-red-400">Description is required</small>}
        </div>

        <div className="space-y-1">
          <textarea
            {...register("ingr", { required: true })}
            placeholder="Ingredients (comma separated)"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          ></textarea>
          {errors.ingredients && <small className="text-red-400">Ingredients are required</small>}
        </div>

        <div className="space-y-1">
          <textarea
            {...register("inst", { required: true })}
            placeholder="Instructions (comma separated)"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          ></textarea>
          {errors.instructions && <small className="text-red-400">Instructions are required</small>}
        </div>

        <div className="space-y-1">
          <select
            {...register("category", { required: true })}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.category && <small className="text-red-400">Category is required</small>}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-400 transition font-medium"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
