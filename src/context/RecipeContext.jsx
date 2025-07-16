import React, { createContext, useEffect, useState } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recipes")) || [];
    setdata(storedData);
  }, []);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
