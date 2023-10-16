import React from "react";
import Navbar from "./nav";
import Search from "./searchbar";

const Header = () => {
  return (
    <div className="header">
      <span><i class="fa-solid fa-bars"></i></span>
      <Navbar />
    </div>
  );
};

export default Header;
