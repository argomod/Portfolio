import React from 'react';
import { motion } from "framer-motion";
import Intro from './components/Intro.js';
import SelectedWork from './components/SelectedWork.js';
import About from './components/About.js';

//Animation values
const variants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
}
const transition = {
    type: "tween",
    ease: "easeIn",
    duration: .3
};

function Home() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={variants} transition={transition}>
            <Intro />
            <SelectedWork />
            <About />
        </motion.div>
    );
}

export default Home;