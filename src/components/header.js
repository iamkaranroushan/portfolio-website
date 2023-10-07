import React from "react";
import Navbar from "./nav";
import Search from "./searchbar";

const Header = () => { 
  return (
    <div className="header">
        <h1>MyPortfolio</h1>
        <Navbar />
    </div>
  );
};

export default Header;
