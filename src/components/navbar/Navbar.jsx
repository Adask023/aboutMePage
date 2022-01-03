import React from "react";
import { Link } from "react-scroll";
import { useViewportScroll } from "framer-motion";

export const Navbar = () => {
  return (
    <nav id="nav" className="navbar bg-white">
      <div className="container row justify-space-between">
        <ul className="row">
          <li className="ml-1 mr-1">
            <Link href="#nav" to="nav">
              Adam Kudłacik
            </Link>
          </li>
          |
          <li className="ml-1 text-hover-fourth">
            <Link href="#home" to="nav">
              Home
            </Link>
          </li>
          <li className="ml-1 text-hover-fourth">
            <Link href="#about" to="aboutme" smooth={true}>
              About
            </Link>
          </li>
          <li className="ml-1 text-hover-fourth">
            <Link href="#skills" to="skills" smooth={true}>
              Skills
            </Link>
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
