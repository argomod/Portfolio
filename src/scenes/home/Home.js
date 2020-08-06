import React from 'react';
import { motion } from "framer-motion";
import { Animation }  from '../../Global';
import { Helmet } from "react-helmet";
import Intro from './components/Intro.js';
import SelectedWork from './components/SelectedWork.js';
import About from './components/About.js';

function Home() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={Animation.variants} transition={Animation.transition}>
            <Helmet><title>Home – Matt Argo</title></Helmet>
            <Intro />
            <SelectedWork />
            <About />
        </motion.div>
    );
}

export default Home;