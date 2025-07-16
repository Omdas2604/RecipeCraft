import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100 px-6 py-16 flex justify-center items-center overflow-hidden">
      <div className="max-w-3xl text-center space-y-10">
        <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide">
          Welcome to RecipeCraft
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <span className="text-yellow-300 font-semibold">RecipeCraft</span> is your modern recipe companion — a tool built for food lovers
          who want to store, edit, and manage their culinary creations in one simple, beautiful interface.
        </p>

        <p className="text-base text-gray-400 leading-relaxed">
          Whether you're jotting down your favorite family dish, building a personal cookbook, or just experimenting in the kitchen,
          RecipeCraft is designed to keep things fast, focused, and easy to use — powered by modern tech like
          <span className="text-white font-medium"> React</span> and <span className="text-white font-medium">Tailwind CSS</span>.
        </p>

        <div className="bg-[#1e293b] rounded-xl p-6 text-left shadow-lg border border-[#334155]">
          <h2 className="text-yellow-300 text-2xl font-semibold mb-3">Why Choose RecipeCraft?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>📌 Save your favorite recipes — forever</li>
            <li>✍️ Edit or tweak ingredients anytime</li>
            <li>🧹 Clean and minimal design — no distractions</li>
            <li>💾 Your data stays local, in your control</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 italic">
          Crafted by developers who love clean code and cleaner kitchens.
        </p>
      </div>
    </div>
  );
};

export default About;
