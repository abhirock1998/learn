import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed left-0 top-0 right-0 z-20 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Visiting Card Parser
          </span>
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
        `block py-2 px-3 bg-blue-700 rounded md:bg-transparent  md:p-0 ${
          isActive ? "text-blue-500" : "text-white"
        }`
      }
      aria-current="page"
    >
      {children}
    </NavLink>
  );
};
