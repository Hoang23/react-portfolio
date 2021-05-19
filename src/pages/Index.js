import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useDarkMode from "../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Theme
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Sidebar
          isOpen={isOpen}
          toggle={toggle}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Navbar toggle={toggle} theme={theme} toggleTheme={toggleTheme} />
        {/* <div
          className='react-transition swipe-up'
          style={{ animationDuration: "1.5s" }}
        > */}

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Intro />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </motion.div>
        {/* </div> */}
      </ThemeProvider>
    </>
  );
};

export default Home;

// const Container = styled.div``;
