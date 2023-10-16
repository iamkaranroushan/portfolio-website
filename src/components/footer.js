import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <nav className="nav-footer">
      <ul>
        <Link to={""}>
          <li>
          <img width="40" height="40" src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin"/>
          </li>
        </Link>
        <Link to={"https://github.com/iamkaranroushan"}>
          <li>
          <img width="40" height="40" src="https://img.icons8.com/nolan/64/github.png" alt="github"/>
          </li>
        </Link>
        <Link to={"mailto:karan.122roushan@gmail.com"}>
          <li>
          <img width="40" height="40" src="https://img.icons8.com/nolan/64/new-post.png" alt="new-post"/>
          </li>
        </Link>
      </ul>
      <span>TERMS & CONDITIONS  |  copyright 2023  |  made by Karan Roushan</span>
    </nav>
  
  );
}

export default Footer;
