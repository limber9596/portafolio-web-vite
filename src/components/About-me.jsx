import React from "react";
import { motion } from "framer-motion";

const rotateAnimation = {
    rotate: [0, 1, 0, -1, 0],
    transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
    },
};

const AboutMe = () => {
    return (
        <section className="about-me">
            <motion.h2 initial={{ rotate: 0 }} animate={rotateAnimation}>
                Quién soy
            </motion.h2>
            <div className="content-img">
                <img src="limbert.jpeg" alt="" />
            </div>

            <motion.p
                className="description"
                initial={{ rotate: 0 }}
                animate={rotateAnimation}
            >
                Me gusta mucho la programación web, puedo pasar varias horas
                programando, disfrutando cada línea de código. Siempre tratando
                de imaginar un diseño o una nueva funcionalidad y plasmarlo. Soy
                una persona perseverante, responsable y dedicado al realizar mis
                tareas, siempre doy mi mejor esfuerzo en cada reto que tengo en
                mi vida.
            </motion.p>
        </section>
    );
};

export default AboutMe;
