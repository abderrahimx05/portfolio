import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
function About() {
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
        <div className="about-main">
          <div className="about-content">
            <div className="image__about">
              <img className="image" alt="" src="./assets/img/perfil.png" />

              <div>
                <h1>About</h1>
                <h4>
                  Hey ! my name is abderrahim ait chraa i have 23 years old and
                  i'm junior web developer . i start learn coding in platform of
                  Udemy and Openclassrooms . i got more than 7 certifications in
                  both platform that helped me to make many projects .
                </h4>
                <br />
                <br />
                <br />
                <h3>
                  <a href="https://abderahim.netlify.app/" target="_blank">
                    Check Resume
                  </a>
                </h3>
              </div>

              <section className="skills" id="skills">
                <h1 className="section-title">Skills</h1>

                <div className="skills__container bd-grid">
                  <div className="skills__box">
                    <h2 className="skills__subtitle">Development</h2>
                    <span className="skills__name">Html</span>
                    <span className="skills__name">Css</span>
                    <span className="skills__name">Javascript</span>
                    <span className="skills__name">Scss</span>
                    <span className="skills__name">React</span>
                    <span className="skills__name">Node</span>
                    <span className="skills__name">Python</span>
                    <span className="skills__name">Git/Github</span>

                    <h2 className="skills__subtitle">Design</h2>
                    <span className="skills__name">Figma</span>
                    <span className="skills__name">Affinity</span>
                  </div>
                </div>
              </section>
              <ButtonsBottom left={"/home"} right={"/project-1"} />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default About;
