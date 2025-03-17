import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="menu">
        <div className="navbar-left">
          <NavLink className="link-btn-nav" to="/">
            <img
              className="logo-nav"
              src="https://i.ibb.co/cLQ05RM/start-button.png"
              alt="logo-home"
            />
          </NavLink>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-title">TRIVIA QUIZ</h1>
        </div>
        <div className="navbar-right">
          <NavLink
            className={({ isActive }) => (isActive ? "active_class" : "")}
            id="home-link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active_class" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <hr id="nav-line" />
    </div>
  );
};

export default Navbar;
