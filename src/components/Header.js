import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    
    <nav className="navHeader">
      <NavLink exact activeClassName="active" className="ho" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" className="users" to="/main">
        Login
      </NavLink>
      <NavLink activeClassName="active" className="contact" to="/quit">
        About
      </NavLink>
    </nav>
  );
}
export default Header;