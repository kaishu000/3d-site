import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div id="hero" className="text-white w-full h-screen grid justify-items-start content-center items-center snap-start z-10 p-24">
            <motion.h1
                className="text-8xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
            >
                AURORA
            </motion.h1>
            <motion.h1
                className="text-8xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                DYNAMICS
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9 }}
            >
                This Spaceship is Precision Engineering for Interstellar Peace.
            </motion.p>
            <div className="mt-4 flex justify-start gap-4">
                <Link href="/preview" className="text-2xl border border-white px-8 py-2 text-white">Preview</Link>
                <a href="https://github.com/kaishu000" className="text-2xl bg-white px-4 py-2 text-black font-bold flex gap-4 items-center">
                    <Image src="/img/github-mark.png" width={36} height={36} alt="github-icon"/>
                    GitHub
                </a>
            </div>
            <div className="absolute left-18 text-2xl bottom-8 grid justify-items-center gap-8 text-neutral-400">
                <div className=" rotate-270">scroll</div>
                <div className="w-px h-16 bg-neutral-400"></div>
            </div>
        </div>
    );
}

export default Hero;