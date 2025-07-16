import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 text-center mb-4">
        Welcome to RecipeCraft
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
        Unleash your inner chef and craft delicious recipes from your kitchen. Share, explore, and favorite dishes that bring people together.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-6 mb-16">
        <Link
          to="/recipes"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded shadow-md transition"
        >
          Explore Recipes
        </Link>
        <Link
          to="/create-recipe"
          className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-6 py-3 rounded transition"
        >
          Craft Your Own
        </Link>
      </div>

      {/* Featured Preview */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Featured Dish"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
            Handpicked Highlight
          </h3>
          <p className="text-gray-400">
            Explore one of our featured favorites! This dish has been saved by dozens of foodies — now it's your turn to try it.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg flex flex-col justify-center text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Why RecipeCraft?
          </h2>
          <p className="text-gray-300">
            ✨ Save your personal recipes<br />
            ❤️ Mark your favorites<br />
            🚀 Fast, elegant, and built for food lovers<br />
            📱 Fully responsive and easy to use<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
