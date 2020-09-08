import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Animation }  from '../../Global';
import { Helmet } from "react-helmet";

const SelectedWorkCard = (props) => {
    return (
        <li>
        <Link className="underline-link" to={props.url}>
         
                {props.caption}<span aria-hidden="true"> →</span>
          
        </Link>
        </li>

    );
}

function Home() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={Animation.variants} transition={Animation.transition}>

            <Helmet><title>Home – Matt Argo</title></Helmet>

            <div>
                <h1>Hi, I'm Matt Argomaniz.</h1>
                <p className="large-text bold-text">A digital product designer who focuses on accessibility, design systems, front-end dev, & solving the climate crisis.</p>
            </div>
            <div>
                <h2 className="spacing-large-top spacing-small-bottom">Selected work</h2>
                <ol>
                    <SelectedWorkCard number={"1."} title={"Hackster News"} caption={"An entirely new editorial product for Hackster.io."} url="/hackster-news" />
                    <SelectedWorkCard number={"2."} title={"Airbnb Transfers"} caption={"A better way to transfer support tickets for Airbnb."} url="/airbnb-transfers" />
                    <li className="light-text">
                        A tool to improve real-time customer support for Airbnb.<br />
                        Coming soon.
                    </li>
                    <li className="light-text">
                        How I designed & coded this website from scratch.<br />
                        Coming soon.
                    </li>
                </ol>
            </div>
            <div>
                <h2 className="spacing-large-top">More about me</h2>
                <p>I like working with passionate folks & companies whose purpose extends beyond what they sell.</p>
                <p>I specialize in user experience and user interface design. Or in other words, I design nice applications for screens. My process involves posing questions to users and stakeholders, gathering data, collaborating, pitching, iterating, prototyping, and building.</p>
                <p>I am especially passionate about inclusive design, accessibility, and the intersection of design and development. I am also an evironmentalist and believe good design can help mitigate our climate crisis.</p>
                <p>I am currently a product designer at <a target="_blank" href="https://www.arcadia.com/">Arcadia</a>, whose mission is to shift the planet to 100% renewable energy. I've also designed for <a target="_blank" href="https://www.airbnb.com/">Airbnb</a> and <a target="_blank" href="https://www.hackster.io/">Hackster</a>.</p>
            </div>

        </motion.div>
    );
}

export default Home;