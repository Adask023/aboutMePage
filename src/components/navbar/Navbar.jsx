import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useViewportScroll } from "framer-motion";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMobileNav(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNav((isMobileNav) => !isMobileNav);
  };

  return (
    <nav id="nav" className="navbar bg-white">
      <div className="container row justify-space-between">
        <ul className="row">
          {!isMobile ? (
            <>
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
                <Link href="#contact">Contact</Link>
              </li>
            </>
          ) : (
            <>
              <li
                className="burger_menu__icon ml-1 text-hover-fourth"
                onClick={toggleMobileNav}
              >
                <i class="fas fa-bars"></i>
              </li>
            </>
          )}
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
      {isMobileNav && (
        <>
          <ul className="mobile_nav pt-2">
            <li className="close_nav__button p-1 font-xl">
              <i onClick={toggleMobileNav} class="fas fa-times text-hover-fourth p-1"></i>
            </li>
            <li className="p-1 text-hover-fourth">
              <Link
                onClick={toggleMobileNav}
                className="p-1"
                href="#home"
                to="nav"
              >
                Home
              </Link>
            </li>
            <li className="p-1 text-hover-fourth">
              <Link
                onClick={toggleMobileNav}
                className="p-1"
                href="#about"
                to="aboutme"
                smooth={true}
              >
                About
              </Link>
            </li>
            <li className="p-1 text-hover-fourth">
              <Link
                onClick={toggleMobileNav}
                className="p-1"
                href="#skills"
                to="skills"
                smooth={true}
              >
                Skills
              </Link>
            </li>
            <li className="p-1 text-hover-fourth">
              <Link onClick={toggleMobileNav} className="p-1" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};
