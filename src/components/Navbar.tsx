//import { NavLink } from "react-router-dom";

const routes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    
      <nav className="border-b-2 border-gray-300">
        <div className="py-4 px-10">
          <a href="/" className="text-lime-500 tracking-widest">
            Emiliano
          </a>
        </div>

        <ul className="flex">{routes.map((route)=> (
          <li key={route.name}>
          <a href={route.path}>{route.name}</a>
          </li>
          
        ))}
          
        </ul>
      </nav>
    
  );
};

export default Navbar;
