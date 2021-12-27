import React from "react";

export const Aboutme = () => {
  return (
    <section id="aboutme" className="mt-4">
      <div className="container">
        <div className="font-xl mt-2 mb-4">About me</div>
        <div className="row justify-space-between">
          <div className="col-12-xs col-6-md">

            <img className="about_me__photo" src="/img/AK_CV_Photo.jpg" alt="" />

            
          </div>
          <div className="col-12-xs col-5-md">
            <p className="mt-1 mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nam optio velit est sunt qui.</p>
            
            <p className="mt-1 mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quisquam provident dolore, pariatur ipsam aperiam repellendus sit asperiores nihil inventore amet voluptas autem cum eveniet vel recusandae mollitia, sed debitis?</p>
          </div>
        </div>
      </div>
    </section>
  );
};
