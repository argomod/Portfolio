import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section, SectionHeader, SectionContent } from './components/Section.js';
import { Intro, IntroHeader, IntroContent } from './components/Intro.js';
import image from './assets/matt-argo-2.jpeg';

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

//COMPONENT
function Work() {
    return (
    <motion.div initial="initial" animate="in" exit="out" variants={variants} transition={transition}>
      <Intro className="spacing-large-top">
        <IntroHeader className="spacing-medium-bottom">
          <Link className="micro-text light-text spacing-xsmall-bottom" to="/">Matt Argo</Link>
          <h1>Video content system for Hackster</h1>
        </IntroHeader>
        <IntroContent><div className="dummy-image-4-by-3"></div></IntroContent>
      </Intro>
      <Section className="spacing-large-top">
        <SectionHeader>Research</SectionHeader>
          <SectionContent>
            <p>I like working with passionate folks & companies whose purpose extends beyond what they sell.</p>
            <p>I specialize in user experience and user interface design. Or in other words, I design nice applications for screens. My process involves posing questions to users and stakeholders, gathering data, collaborating, pitching, iterating, prototyping, and building.</p>
            <p>I am especially passionate about inclusive design, accessibility, and the intersection of design + development. I am also an evironmentalist and believe good design can help mitigate our climate crisis.</p>
            <p>I am currently looking for a new role. I’ve worked for Airbnb and Hackster.</p>
            <img className="spacing-medium-top" src={image} alt="This is an image." />
            <p aria-hidden="true" className="micro-text spacing-xsmall-top caption-text">Test</p>
          </SectionContent>
      </Section>
    </motion.div>
    );
}

export default Work;