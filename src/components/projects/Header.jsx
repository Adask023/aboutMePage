import React from "react";

export const Header = ({ img, title }) => {
  return (
    <section className="project_page__header">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="project_page__header_img"
      ></div>
      <div className="container">
        <div className="row">
          <div className="font-xxl col-xs-12">{title}</div>
        </div>
      </div>
    </section>
  );
};

Header.defaultProps = {
  img: "/img/forest-background.jpg",
  title: "Another great project!",
};
