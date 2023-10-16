import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"}>
          <li>
            Overview
          </li>
        </Link>
        <Link to={"/projects"}>
          <li>
            Projects <i class="fa-solid fa-caret-down"></i>
          </li>
        </Link>
        <Link to={"/about"}>
          <li>
             About me
          </li>
        </Link>
        <Link to={"/contact"}>
          <li>
            Connect
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
