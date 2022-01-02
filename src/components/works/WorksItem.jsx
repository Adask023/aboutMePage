import { motion } from "framer-motion";
import React from "react";

const WorksItem = ({ workItem }) => {
  return (
    <div key={workItem.id} className="col-4-xl col-6-md col-12-xs">
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        className="works__item"
      >
        <div className="works__item_info font-sm">{workItem.description}</div>
        <div className="works__img_container">
          <img src={workItem.photoUrl} alt="" height="auto" />
        </div>
        <div className="works__item_text font-lg">{workItem.projectName}</div>
      </motion.div>
    </div>
  );
};

export default WorksItem;
