import React, { useEffect } from "react";
import { useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import { items } from "./skillsData";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  return (
    <section id="skills" className="mt-4">
      <div className="container">
        <div className="font-xl mt-2 mb-4">Skills</div>
        <AnimateSharedLayout>
          <motion.ul
            className="skills__list"
            layout
            initial={{ borderRadius: 25 }}
          >
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </section>
  );
};

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className="skills_item mb-1"
      layout
      onClick={toggleOpen}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      <motion.div className="col-12-xs skills_item__row">
        <motion.div className="skills_item__icon font-xxl mr-2" layout>
          <i className={`${item?.iconClass}`}></i>
        </motion.div>
        <motion.div className="skills_item__progress_bar"></motion.div>
        <motion.div className="skills_item__progress_number font-lg ml-2">
          {item.level}%
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && <Content name={item?.name} icon={item?.icon} />}
      </AnimatePresence>
    </motion.li>
  );
}

function Content({ name, icon }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div>{name}</div>
      <div>{icon}</div>
    </motion.div>
  );
}
