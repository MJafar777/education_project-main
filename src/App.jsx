import React from "react";
import Blog from "./components/Blog/Blog";
import Clients from "./components/Cliend/Clients";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Education from "./components/Education/Education";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Hearder";
import Programs from "./components/Programs/Programs";
import Teachers from "./components/Teachers/Teachers";

function App() {
  return (
    <>
      <Header />
      <Education />
      <Features />
      <Courses />
      <Teachers />
      <Programs />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
