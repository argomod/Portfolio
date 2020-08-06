import React from 'react';
import { motion } from "framer-motion";
import { Animation }  from '../../Global';
import { Helmet } from "react-helmet";
import  Breadcrumb  from '../../components/Breadcrumb'
import { Section, SectionHeader, SectionContent } from './components/Section';
import { Intro, IntroContent, IntroHeader, IntroDetails } from './components/Intro';
import image from './assets/matt-argo-2.jpeg';

//Page data
const Page = {
  title: 'Hackster News'
}

//COMPONENT
function HacksterNews() {
    return (
      <motion.div initial="initial" animate="in" exit="out" variants={Animation.variants} transition={Animation.transition}>

        {/* Things to but in the head tag */}
        <Helmet><title>{Page.title + " – Matt Argo"}</title></Helmet>

        {/* Introduction to the project */}
        <Intro className="spacing-large-top">
          <IntroHeader className="spacing-small-bottom"><Breadcrumb /></IntroHeader>
          <IntroContent>
            <h1>{Page.title}</h1>
            <IntroDetails className="small-text spacing-medium-top light-text">
              <li>Timeline: <br />3 months, while working 10% on another project</li>
              <li>Team: <br />Me (remote), two developers, cofounder, editor in chief (remote)</li>
              <li>Techniques: <br />Remote usability studies, prototyping, front-end development</li>
              <li>Tools: <br />Sketch, Invision, React, Google Hangouts, Slack</li>
            </IntroDetails>
          </IntroContent>
        </Intro>

        {/* Section 1 */}
        <Section className="spacing-large-top">
          <SectionHeader>The problem</SectionHeader>
          <SectionContent>
            <p>
            After 2 years of cultivating an awesome blog on Medium.com, we hit a wall of platform limitations. We also found that our Medium blog referred very little traffic to our main site. It was clear that we should consider building our own editorial product.
            </p>
            <p>
            The team aligned on several goals: 1. Bring the reader-facing and author-facing editorial experiences onto Hackster’s own platform, 2. Introduce ads to our editorial content in order to meet our revenue targets, and 3. Provide a seamless, compelling experience alongside Hackster’s main form of content, DIY project tutorials.
            </p>
            {/* <img className="spacing-medium-top" src={image} alt="This is an image." />
            <p aria-hidden="true" className="micro-text spacing-xsmall-top caption-text">Test</p> */}
          </SectionContent>
        </Section>

        {/* Section 2 */}
        <Section className="spacing-large-top">
          <SectionHeader>Concepting</SectionHeader>
          <SectionContent>
            <p>
            After interviewing our editor in chief and cofounder, I started drafting design requirements and a plan to deliver a final product within my timeline. Then I started sketching.
            </p>
            <p>
            I decided early on to design the reader experience before the author experience. This allowed me to define a visual style that I could adapt to my admin designs, which could evolve into the start of an internal design system.
            </p>
            <p>
            From several directions, I narrowed in on two. One was a card-based layout, which made sense because the rest of Hackster’s content is displayed in cards. The other was a text-based layout (which I named the editorial style, inspired by The New York Times) which also made sense as a way to differentiate between DIY projects and news articles.
            </p>
            <p>
            In situations like these, I prefer to test my assumptions rather than rely on intuition alone.
            </p>
            <p>
            I created low-fidelity mockups for both directions in Sketch and presented them to the entire team (remotely, to boot). We unanimously agreed on the editorial style. I also pitched an idea of including a banner ad as an extra assurance of reaching our revenue goal. And last, we agreed on the name of our product: Hackster News.
            </p>
          </SectionContent>
        </Section>

        {/* Section 3 */}
        <Section className="spacing-large-top">
          <SectionHeader>Prototyping</SectionHeader>
          <SectionContent>
            <p>
            After creating high-fidelity mockups of 4 key scenes of the reader and author experience (in desktop, tablet, and mobile screen sizes), I organized another formal review with the team. Because I had frequently previewed my work on Slack, there were no surprises.
            </p>
            <p>
            With the team aligned on one design, I built a 70-screen Invision prototype. The Sketch library I previously created for our UI kit was extremely helpful. The first portion of the prototype demonstrated how a reader can navigate to Hackster News, read an article, and view the most recently published articles.
            </p>
            <p>
            The second portion of the prototype demonstrated how an author can compose an article for publishing. This was especially challenging due to our technical constraints. Because Medium uses a WYSIWYG composer, I collaborated with our developers to determine how much we could replicate this experience for our authors.
            </p>
          </SectionContent>
        </Section>

        {/* Section 4 */}
        <Section className="spacing-large-top">
          <SectionHeader>Remote usability studies</SectionHeader>
          <SectionContent>
            <p>
            While planning this project, I committed to conducting remote usability studies with participants from across the globe. To design inclusively, I felt it was important to represent all user perspectives – not just those from the U.S – especially since Hasckster has a global audience.
            </p>
            <p>
            I recruited 8 participants from different countries, including Nigeria and India. I wrote a script to guide participants through several tasks (i.e. navigating to the main featured article, identifying which articles are sponsored), and I conducted my studies through Google Hangouts.
            </p>
            <p>
            I was reassured to find that several participants were eager to see Hackster earn more revenue and “ditch Medium”. They also revealed to me which parts of my design were confusing, such as the vague visual treatment of sponsored articles. My final design incorporates an extra signifier around sponsored articles because of this feedback.
            </p>
          </SectionContent>
        </Section>

        {/* Section 5 */}
        <Section className="spacing-large-top">
          <SectionHeader>Hand off</SectionHeader>
          <SectionContent>
            <p>
            Because the Sketch library I previously built documents general CSS styles, I was able to focus more closely on logic with our developers. Together we identified a handful of bugs in the author experience that I was able to quickly fix.
            </p>
            <p>
            The biggest challenge I faced was documenting the new usage of our 12 column gird. I wanted to ensure that my design responded appropriately at every screen size. So rather than make a ton of mockups in Sketch, I decided to use my React skills and build a fluid prototype to give to the developers. To do this, I used CSS grid, create-react-app, and Hackster’s typography system.
            </p>
          </SectionContent>
        </Section>

        {/* Section 6 */}
        <Section className="spacing-large-top">
          <SectionHeader>Results</SectionHeader>
          <SectionContent>
            <p>
            My designs met all of our goals. On launch, the open-ended feedback I collected from readers was overwhelmingly positive. Our authors also enjoyed migrating off of Medium and feeling closer to the Hackster brand. And our advertising partners were enthusiastic about the extra banner ad I was able to incorporate into Hackster News.
            </p>
            <p>
            In 2020, Hackster News received the Communicator Award by the Academy of Interactive & Visual Arts.
            </p>
            <p>
            I am especially grateful for the Hackster team and our research participants – thank you for such a wonderful collaborative experience.
            </p>
          </SectionContent>
        </Section>


      </motion.div>
    );
}

export default HacksterNews;