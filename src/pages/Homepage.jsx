import React from "react";
import { Aboutme } from "../components/aboutme/Aboutme";
import { Hero } from "../components/hero/Hero";
import { Skills } from "../components/skills/Skills";
import { Layout } from "../layouts/Layout";

export const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Aboutme />
      <Skills />
    </Layout>
  );
};
