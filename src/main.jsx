import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import RecipeContext from './context/RecipeContext.jsx';

createRoot(document.getElementById('root')).render(
  <RecipeContext>
  <BrowserRouter basename='/RecipeCraft'>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </RecipeContext>

)
