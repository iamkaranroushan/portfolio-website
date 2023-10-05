import React from "react";
import Navbar from "./nav";
import Search from "./searchbar";

const Header = () => {
  return (
    <div>
      <h1>App</h1>
      <Navbar />
      <Search />
    </div>
  );
};

export default Header;
