import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Countries"> Countries</Link>
      </li>
    </nav>
  );
};

export default Navigation;
