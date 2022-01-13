import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Aboutme = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("visible");
    }
  }, [controls, inView]);

  const imgVariant = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  };

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  };

  return (
    <section id="aboutme" className="pt-4 pb-4">
      <div className="container">
        <div className="font-xl mt-2 mb-4">About me</div>
        <div className="row justify-space-between">
          <div ref={ref} className="col-12-xs col-6-md">
            <motion.img
              variants={imgVariant}
              initial="hidden"
              animate={controls}
              className="about_me__photo"
              src="./img/AK_CV_Photo.jpg"
              alt=""
            />
          </div>
          <div className="col-12-xs col-5-md">
            <motion.p
              variants={textVariant}
              initial="hidden"
              animate={controls}
              className="mt-1 mb-1 font-lg"
            >
              Adam Kudłacik
            </motion.p>

            <motion.p
              variants={textVariant}
              initial="hidden"
              animate={controls}
              className="mt-1 mb-1"
            >
              I am a person who learns quickly and willingly. I try to gain new knowledge everyday. When I lack the skills necessary to achieve my goals, I do everything I can to improve and learn. I work well in a team but also on my own.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
