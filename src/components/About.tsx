import { motion } from "motion/react";

const About = () => {
    return (
        <div id="about" className="text-white w-full h-screen grid content-center p-24 items-center snap-start z-10">
            <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="text-6xl font-bold">About</motion.h1>
            <motion.hr
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="w-1/3 my-2" />
            <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="my-4 mt-8 text-4xl">Vision</motion.h2>
            <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}>
                Aurora Dynamics is more than just a spacecraft manufacturer.<br/>
                We are a group of engineers dedicated to the pursuit of beautiful precision<br/>
                that brings stability and harmony to extreme environments.<br/>
                We provide flawless engineering to maintain the balance of the vast galaxy.<br/>
            </motion.p>
            <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="my-4 mt-8 text-4xl">Technical Specs</motion.h2>
            <motion.ul
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}>
                <li>Propulsion: Uses an ultra-efficient propulsion system.</li>
                <li>Structure: Impact-dispersing wing frame.</li>
            </motion.ul>
            <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="my-4 mt-8 text-4xl">Core Values</motion.h2>
            <motion.ul
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}>
                <li>Precision: A design philosophy that does not allow for errors of even 0.001mm.</li>
                <li>ability: Consistent performance in any space environment.</li>
            </motion.ul>
        </div>
    );
}

export default About;