import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <nav className="nav-footer">
      <ul>
        <a href="">
          <li>
            linkedIn <i class="fa-brands fa-linkedin"></i>
          </li>
        </a>
        <a href="https://github.com/iamkaranroushan">
          <li>
            GitHub <i class="fa-brands fa-github"></i>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Footer;
