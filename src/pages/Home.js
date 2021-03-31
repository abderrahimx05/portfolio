import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 550,
                top: -200,
                bottom: 250,
              }}
            >
              Abderrahim ait chraa
            </motion.h1>
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 525,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
              <a href="https://abderahim.netlify.app/" target="_blank">
                Check Resume .
              </a>
            </motion.h2>
          </div>
        </div>

        <ButtonsBottom right={"/about"} />
      </motion.div>
    </main>
  );
};

export default Home;
