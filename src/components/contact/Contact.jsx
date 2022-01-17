import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import validate from "./formSchema";

export const Contact = () => {
  const form = useRef();

  function handleFormSubmit(values) {
    console.log(values);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
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

    console.log("wysłano");
    // e.target.reset();
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validate,
    onSubmit: ({ resetForm }) => {
      console.log("form submitting");

      handleFormSubmit(form.current);
      resetForm();
      console.log("after reset");
      // actions.setSubmitting(false);
      // setTimeout(() => {}, 1000);
    },
  });

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
              <form
                ref={form}
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                  formik.resetForm();
                }}
              >
                <input
                  className="mt-2"
                  placeholder="name..."
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="error_message font-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
                <input
                  className="mt-1"
                  placeholder="email..."
                  type="mail"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="error_message font-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
                <textarea
                  className="mt-2"
                  placeholder="message..."
                  type="box"
                  rows="8"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message ? (
                  <div className="error_message font-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
                <button
                  className="contact_submit__buttton bg-fourth font-md mt-1"
                  type="submit"
                >
                  Send
                </button>
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
