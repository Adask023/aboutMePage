import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav id="nav" className="navbar">
      <div className="container row justify-space-between">
        <ul className="row">
          <li className="ml-1 mr-1">
            <a href="#nav">Adam Kudłacik</a>
          </li>
          |
          <li className="ml-1 text-hover-fourth">
            <a href="#home">Home</a>
          </li>
          <li className="ml-1 text-hover-fourth">
            <Link href="#about" to="aboutme" smooth={true}>
              About
            </Link>
          </li>
          <li className="ml-1 text-hover-fourth">
            <a href="#skills">Skills</a>
          </li>
          <li className="ml-1 text-hover-fourth">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="row">
          <li className="ml-1 text-hover-fourth ts-2">
            <a href="https://github.com/Adask023">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="ml-1 text-hover-fourth">
            <a href="https://www.linkedin.com/in/adam-kud%C5%82acik/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
