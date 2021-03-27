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
                <h2>
                  Hey ! my name is abderrahim ait chraa i have 23 years old and
                  i'm junior web developer
                </h2>
              </div>
              <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">
                  <div class="skills__box">
                    <h3 class="skills__subtitle">Development</h3>
                    <span class="skills__name">Html</span>
                    <span class="skills__name">Css</span>
                    <span class="skills__name">Javascript</span>
                    <span class="skills__name">Scss</span>
                    <span class="skills__name">React</span>
                    <span class="skills__name">Node</span>

                    <h3 class="skills__subtitle">Design</h3>
                    <span class="skills__name">Figma</span>
                    <span class="skills__name">Affinity</span>
                  </div>

                  <div class="skills__img">
                    <img src="assets/img/skill.jpg" alt="" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <ButtonsBottom />
      </motion.div>
    </main>
  );
}

export default About;
