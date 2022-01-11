import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="hero__img"
      style={{ backgroundImage: "url(./img/hero-photo.jpg)" }}
    >
      <div className="container hero__text">
        <div className="row">
          <div className="pl-4 col-12-xs">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-xxl"
            >
              Hello
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="font-xl mt-1 mb-1"
            >
              My name is{" "}
              <span className="font-xxl text-fourth">Adam Kudłacik</span>
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              and im a <span className="font-xxl text-fourth">Front-end</span>{" "}
              developer
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="arrow font-xl text-hover-fourth">
        <Link href="#about" to="aboutme" smooth={true}>
          <motion.i
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
              ease: [0.1, 0.3, 0.6, 1],
            }}
            class="fas fa-arrow-circle-down"
          ></motion.i>
        </Link>
      </div>
    </motion.div>
  );
};
