import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </div>
  );
};

export default Navigation;
