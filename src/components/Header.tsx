import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
    return (
        <motion.div
        className="w-full flex justify-between px-24 py-4 z-30 border-b text-white border-white fixed"
        initial={{y:-50}}
        animate={{y:0}}
        transition={{duration:0.5}}
        >
            <h2 className="text-2xl font-bold"><Link href="#hero">AURORA DYNAMICS</Link></h2>
            <ul className="flex justify-center gap-16 font-bold">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#ability">Ability</Link></li>
                <li><Link href="#model-info">Model Info</Link></li>
            </ul>
        </motion.div>
    );
}

export default Header;