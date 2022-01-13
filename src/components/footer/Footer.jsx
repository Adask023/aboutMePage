import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-1 pb-1 bg-gray-dark">
      <div className="container ">
        <div className="row justify-space-between p-2">
          <div className="col-12-sm col-4-md text-white">
            Adam Kudłacik &#169;2022 - Web development
          </div>
          <div className="col-12-sm col-2-md text-white">
            <a
              href="https://github.com/Adask023"
              className="text-hover-fourth mr-1"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/adam-kud%C5%82acik/"
              className="text-hover-fourth mr-1"
            >
              linkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
