import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { items } from "./skillsData";

export const Skills = () => {
  return (
    <div className="container">
      <h1 className="mt-4">hello</h1>
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
  );
};

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className="row"
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <motion.div className="col-12-xs">
        <motion.div className="skills_item__icon font-xxl" layout>
          <i className={`${item?.iconClass} `}></i>
          {item?.id}
        </motion.div>
        <AnimatePresence>
          {isOpen && <Content name={item?.name} icon={item?.icon} />}
        </AnimatePresence>
      </motion.div>
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
    >
      <div>{name}</div>
      <div>{icon}</div>
    </motion.div>
  );
}
