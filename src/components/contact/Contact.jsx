import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validate from "./formSchema";
import { useFormik } from "formik";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";

export const Contact = () => {
  // hooks
  const form = useRef();
  const [sendInfo, setSendInfo] = useState("");
  const [sendLoading, setSendLoading] = useState(false);

  // functions
  function handleFormSubmit(values) {
    setSendLoading(true);
    console.log(values);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        formik.resetForm();
        setSendInfo("Thank you, email was send.");
        setSendLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
        setSendInfo(
          "Sending Error, contact me directly kudlacik.dev@gmail.com"
        );
        setSendLoading(false);
      });

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
    onSubmit: () => {
      handleFormSubmit(form.current);
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
                  setSendInfo("");
                  formik.handleSubmit();
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
                <div className="row">
                  <motion.button
                    className={`contact_submit__buttton bg-fourth font-md mt-1 ${
                      sendLoading ? "button_loading" : null
                    }`}
                    type="submit"
                    disabled={sendLoading}
                    whileHover={
                      !sendLoading && {
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }
                    }
                    whileTap={{ scale: 0.95 }}
                  >
                    Send
                  </motion.button>
                  {sendLoading && (
                    <div className="pt-1 pl-1">
                      <TailSpin color="#00c9ad" height={30} width={30} />
                    </div>
                  )}

                  {}
                  {sendInfo && (
                    <div className="pt-1 pl-1 send_info">{sendInfo}</div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
