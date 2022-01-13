import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="bg-gray-light mt-4">
      <div className="container">
        <div class="font-xl pt-4 pb-2 text-white">Contact me!</div>
        <div className="font-xxl text-white pb-2">
          Contact me via{" "}
          <a
            href="https://www.linkedin.com/in/adam-kud%C5%82acik/"
            className="text-fourth text-hover-primary"
          >
            LinkedIn
          </a>{" "}
          or via contact form
        </div>
        <div className="row justify-center">
          <div className="col-12-xs col-6-md pb-4">
            <div className="contact_form__wrapper p-2 ">
              <form ref={form} onSubmit={(e) => handleFormSubmit(e)}>
                <input
                  className="mb-1"
                  placeholder="name..."
                  type="text"
                  name="name"
                />
                <input
                  className="mb-2"
                  placeholder="email..."
                  type="mail"
                  name="email"
                />
                <textarea
                  className="mb-2"
                  placeholder="message..."
                  type="box"
                  rows="8"
                  name="message"
                />
                <motion.button
                  className="contact_submit__buttton bg-fourth font-md"
                  type="submit"
                >
                  Send
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Contact = () => {
//   return (
//     <section className="bg-gray-light mt-4">
//       <div className="container">
//         <div class="font-xl pt-2 mb-4 text-white">Contact me</div>
//         <div className="row justify-center">
//           <img
//             src="/img/thinking.png"
//             alt=""
//             className="col-12-xs col-3-md pl-2 pr-2"
//           />
//           <div className="col-12-xs col-6-md">
//             <div className="contact_form__wrapper p-2 ">
//               <form>
//                 <input type="text" />
//                 <input type="mail" />
//                 <input type="box" />
//                 <button className="bg-fourth font-lg " type="submit"> Send</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
