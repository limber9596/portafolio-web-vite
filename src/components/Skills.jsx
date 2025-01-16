import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // Define el efecto de rotación con framer-motion
  const rotateAnimation = {
    rotate: [0, 10, 0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  };

  return (
    <div>
      <section className="skills">
        <h2>Tecnologías</h2>
        <div className="skills-container">
          {[
            { src: "git_img.png", alt: "GitHub", name: "GitHub" },
            { src: "html_img.png", alt: "HTML", name: "HTML" },
            { src: "css_img.png", alt: "CSS", name: "CSS" },
            {
              src: "js_img.png",
              alt: "JavaScript",
              name: "JavaScript",
            },
            {
              src: "ts_img.png",
              alt: "TypeScript",
              name: "TypeScript",
            },
            {
              src: "jquery_img.png",
              alt: "jQuery",
              name: "jQuery",
            },
            { src: "react_img.png", alt: "React", name: "React" },

            {
              src: "angular_img.png",
              alt: "Angular",
              name: "Angular",
            },
            {
              src: "bootstrap_img.png",
              alt: "Bootstrap",
              name: "Bootstrap",
            },
            { src: "sass_img.png", alt: "Sass", name: "Sass" },
            { src: "mysql_img.png", alt: "MySQL", name: "MySQL" },
            { src: "php_img.png", alt: "PHP", name: "PHP" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              initial={{ rotate: 0 }}
              animate={rotateAnimation}
            >
              <motion.img
                src={skill.src}
                alt={skill.alt}
                className="skill-img"
                // Opcional: Configura la animación para solo rotar las imágenes
                style={{ rotate: rotateAnimation.rotate }}
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
