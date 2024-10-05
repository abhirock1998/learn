import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-20 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/" className="block flex-1">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Visiting Card Parser
          </span>
        </Link>

        <div className="items-center justify-between flex">
          <ul className="flex gap-x-5 font-medium">
            <li>
              <NavLinkComponent to="/">Home</NavLinkComponent>
            </li>
            <li>
              <NavLinkComponent to="/users">Users</NavLinkComponent>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLinkComponent = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block py-2 px-3 rounded ${isActive ? "text-blue-500" : "text-white"}`
      }
      aria-current="page"
    >
      {children}
    </NavLink>
  );
};
