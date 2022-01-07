import React from "react";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";

export const ProjectLayout = ({ children }) => {
  return (
    <>
      {children}
      <Contact />
      <Footer />
    </>
  );
};
