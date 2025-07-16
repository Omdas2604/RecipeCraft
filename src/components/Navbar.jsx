import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition"
            }
          >
            Recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition"
            }
          >
            Create
          </NavLink>
          </li>
          <li>
             <NavLink
            to="/fav"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition"
            }
          >
            Favourite
          </NavLink>
          </li>
         
      </ul>
    </nav>
  );
};

export default Navbar;
