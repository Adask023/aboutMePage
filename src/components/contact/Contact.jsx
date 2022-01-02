import React from "react";

export const Contact = () => {
  return (
    <section className="bg-gray-light mt-4">
      <div className="container">
        <div class="font-xl pt-2 mb-4 text-white">Contact me</div>
        <div className="row justify-center">
          <img
            src="/img/thinking.png"
            alt=""
            className="col-12-xs col-3-md pl-2 pr-2 bg-primary"
          />
          <div className="col-12-xs col-6-md bg-secondary">
            <div className="contact_form__wrapper p-2 ">
              <form>
                <input type="text" />
                <input type="mail" />
                <input type="box" />
                <button className="bg-fourth font-lg " type="submit"> Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
