import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section className="bg-gray-light mt-4">
      <div className="container">
        <div class="font-xl pt-4 pb-2 text-white">Contact me!</div>
        <div className="row justify-center">
          <div className="col-12-xs col-6-md pb-4">
            <div className="contact_form__wrapper p-2 ">
              <form>
                <input className="mb-1" placeholder="name..." type="text" />
                <input className="mb-2" placeholder="email..." type="mail" />
                <textarea
                  className="mb-2"
                  placeholder="message..."
                  type="box"
                  rows="8"
                />
                <motion.button
                  className="contact_submit__buttton bg-fourth font-md"
                  onClick={(e) => handleFormSubmit(e)}
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
