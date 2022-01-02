import React from "react";
import data from "./worksData";
import WorksItem from "./WorksItem";

export const Works = () => {
  return (
    <section id="works" className="mt-4 mb-1">
      <div className="container">
        <div class="font-xl mt-2 mb-4">My works</div>
        <div className="row gap-2">
          {data.map((workItem) => {
            return (
              <>
                <WorksItem workItem={workItem} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
