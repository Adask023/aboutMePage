import React from "react";
import { Aboutme } from "../components/aboutme/Aboutme";
import { Contact } from "../components/contact/Contact";
import { Hero } from "../components/hero/Hero";
import { Skills } from "../components/skills/Skills";
import { Works } from "../components/works/Works";
import { Layout } from "../layouts/Layout";

export const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Aboutme />
      <Skills />
      <Works />
      <Contact />
    </Layout>
  );
};
