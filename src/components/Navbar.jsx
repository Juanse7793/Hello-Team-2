import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
