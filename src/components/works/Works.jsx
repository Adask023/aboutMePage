import React from "react";
import data from "./worksData";
import WorksItem from "./WorksItem";
import { motion } from "framer-motion";

export const Works = () => {

  return (
    <section id="projects" className="mt-4 mb-1">
      <div className="container">
        <div class="font-xl mt-2 mb-4">My projects</div>
        <div className="row gap-2">
          {data.map((workItem) => {
            return (
              <>
                <WorksItem workItem={workItem} />
              </>
            );
          })}
        </div>
        <div className="row pt-4  justify-center">
          <div className="font-lg github_projects__link">
            See my other projects on{" "}
            <motion.a
              className="text-fourth text-hover-primary"
              href="https://github.com/Adask023"
            >
              github
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
