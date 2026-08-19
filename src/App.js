import React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./features/home/Hero";
import About from "./features/about/About";
import Stack from "./features/stack/Stack";
import Projects from "./features/projects/Projects";
import Experience from "./features/experience/Experience";
import Certifications from "./features/certifications/Certifications";
import Github from "./features/github/Github";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Certifications />
      <Github />
      <Contact />
    </Layout>
  );
}

export default App;
