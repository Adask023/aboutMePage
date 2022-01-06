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
    <section id="skills" className="mt-4 pb-4">
      <div className="container">
        <div className="font-xl pt-4 mb-4">Skills</div>
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
        duration: 0.6,
        // delay: 0.4,
      },
    },
  };

  const progressBarVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: `${item?.level - 100}%`,
      transition: {
        duration: 2,
        delay: 0.4,
      },
    },
  };

  const progressValueVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 2,
      },
    },
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className="skills_item mb-1 bg-white"
      layout
      onClick={toggleOpen}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      <motion.div className="col-12-xs skills_item__row" layout>
        <motion.div className="skills_item__icon font-xxl mr-2" layout>
          <i className={`${item?.iconClass}`}></i>
        </motion.div>
        <motion.div className="skills_item__progress_bar">
          <motion.div
            initial="hidden"
            variants={progressBarVariants}
            animate={controls}
            className="bar"
          ></motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          variants={progressValueVariants}
          animate={controls}
          className="skills_item__progress_number font-lg ml-2"
        >
          {item.level}%
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <Content
            name={item?.name}
            icon={item?.icon}
            description={item?.description}
            content={item?.content}
          />
        )}
      </AnimatePresence>
      <motion.div className="skills__open_arrow">
        <motion.i
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ delay: 0.6 }}
          class="fas fa-chevron-down"
        ></motion.i>
      </motion.div>
    </motion.li>
  );
}

function Content({ name, icon, description, content }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="skills_item__content p-1">
        <div className="font-xl">{name}</div>
        <div className="pb-1">{description}</div>
        <div>
          {content?.map((contentItem) => {
            return (
              <div className="pl-2" key={contentItem.id}>
                <div className="font-lg">
                  <span className="font-md pr-1">
                    <i class="fas fa-check"></i>
                  </span>
                  {contentItem.contentName}
                  <span className="font-md pl-1">
                    - {contentItem.contentDescription}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
