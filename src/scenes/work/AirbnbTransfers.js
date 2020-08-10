import React from 'react';
import { motion } from "framer-motion";
import { Animation }  from '../../Global';
import { Helmet } from "react-helmet";
import  Breadcrumb  from '../../components/Breadcrumb'
import { Section, SectionHeader, SectionContent } from './components/Section';
import { Intro, IntroContent, IntroHeader, IntroDetails } from './components/Intro';
import ImageWrapper from './components/ImageWrapper';
import airbnbTransfersIntro from './assets/airbnb-transfers-intro.gif';
import airbnbTransfersProto1 from './assets/airbnb-transfers-proto-1.gif';
import airbnbTransfersNotes from './assets/airbnb-transfers-notes.png';
import airbnbTransfersProto2 from './assets/airbnb-transfers-proto-2.gif';


//Page data
const Page = {
  title: 'Transfers for Airbnb'
}

//COMPONENT
function AirbnbTransfers() {
    return (
      <motion.div initial="initial" animate="in" exit="out" variants={Animation.variants} transition={Animation.transition}>

        {/* Things to but in the head tag */}
        <Helmet><title>{Page.title + " – Matt Argo"}</title></Helmet>

        {/* Introduction to the project */}
        <Intro className="spacing-large-top">
          <IntroHeader className="spacing-medium-bottom">
            <Breadcrumb />
          </IntroHeader>
          <IntroContent>
            <h1 className="spacing-medium-bottom">A better way to transfer support tickets for Airbnb.</h1>
            <IntroDetails className="light-text small-text">
              <p>Team: <br />Me, two developers, project manager, researcher, data scientist, writer</p>
              <p>Timeline: <br />3 months while working 50% on another project</p>
              <p>Techniques: <br />User interviews, focus group, prototyping, design systems</p>
              <p>Tools: <br />Figma, Asana, Slack, Storybook</p>
            </IntroDetails>

            <ImageWrapper className="spacing-small-top">
              <img src={airbnbTransfersIntro} alt="View the prototype on Figma." />
            </ImageWrapper>
            <p aria-hidden="true" className="micro-text spacing-small-top caption-text"><a target="_blank" href="https://www.figma.com/proto/42Oql5oNy3Bz21yx1xrwAA/mattargo?node-id=809%3A41025&viewport=294%2C-6%2C0.05225054919719696&scaling=scale-down">View the prototype on Figma.</a></p>

          </IntroContent>
        </Intro>

        {/* Section 1 */}
        <Section className="spacing-large-top">
          <SectionHeader>The problem</SectionHeader>
          <SectionContent>
            <p>
            Airbnb’s support specialists often work together to solve challenging host and guest issues. However, the way they transferred support tickets between each other inside our internal customer service tool (called Nova) was informal and often lead to mistakes. We called these “misescalations”, and I was tasked with designing a feature to reduce their occurrence.
            </p>
            <p>
            I collaborated with my project manager to establish a timeline that would allow research to be conducted before design and allow an extra week after beta testing to make any ad hoc adjustments with our developers if necessary.
            </p>
          </SectionContent>
        </Section>

        {/* Section 2 */}
        <Section className="spacing-large-top">
          <SectionHeader>First things first</SectionHeader>
          <SectionContent>
            <p>
            Before I start designing, I usually like to complete research. But since I had a relatively short timeline, I first collaborated with our developers to determine which general UI patterns were feasible to build.
            </p>
            <ImageWrapper className="spacing-medium-top">
              <img src={airbnbTransfersProto1} alt="I used this lo-fi prototype to brainstorm with the developers on how a sheet pattern could be implemented. I scrapped the idea." />
            </ImageWrapper>
            <p aria-hidden="true" className="micro-text spacing-small-top spacing-medium-bottom caption-text">I used this lo-fi prototype to brainstorm with the developers on how a sheet pattern could be implemented. I scrapped the idea.</p>
            <p>
            There were two main patterns available: a modal or a sheet (a surface that slides in to cover a portion of the web app view). While Nova primarily uses sheets, I opted to use a modal for a few reasons:
            </p>
            <p>
            1. Modals cover the entire app view, which was appropriate since transferring a ticket affects every part of the app, 2. Sheets with multi-step functionality (a likely requirement for this feature) were difficult to maintain and would increase our technical debt, and 3. My colleague was overhauling the entire UI of Nova – so a modal pattern was most likely to survive.
            </p>
            <p>
            Once we agreed on the modal pattern, the developers were able to start constructing a framework while I focused on research.
            </p>
          </SectionContent>
        </Section>

        {/* Section 3 */}
        <Section className="spacing-large-top">
          <SectionHeader>Research</SectionHeader>
          <SectionContent>
            <p>
            Working with a researcher, we conducted several remote interviews with support specialists of varying seniorities across the globe. I also lead a focus group of eight support specialists who worked in our Portland office.
            </p>
            <p>
            One of the most important insights I uncovered was the fear support specialists felt when transferring tickets. Not only were they nervous about being reprimanded for making a mistake, but also they were afraid of creating a poor experience for the customer. That’s because each time a customer is transferred they must explain their issue to a new specialist – potentially extending a quick issue into a week-long hassle.
            </p>
            <img className="spacing-medium-top" src={airbnbTransfersNotes} alt="Good old paper and pen. I turned my research notes into design requirements in Goodle Docs." />
            <p aria-hidden="true" className="micro-text spacing-medium-top spacing-medium-bottom caption-text">Good old paper and pen. I turned my research notes into design requirements in Goodle Docs.</p>
            <p>
            I compiled these insights into a Google Doc and then wrote design requirements using job stories. One for example was: “As a support specialist, when I’m transferring a ticket, I want to know where the ticket is going, so that I can know beforehand that the customer’s issue will be taken care of correctly.”
            </p>
          </SectionContent>
        </Section>

        {/* Section 4 */}
        <Section className="spacing-large-top">
          <SectionHeader>Prototyping</SectionHeader>
          <SectionContent>
            <p>
            After I created a user journey map with my project manager and researcher, I built a super simple greyscale prototype in Figma. Prototyping at this stage allowed me to quickly test workflow concepts with support specialists. Through this collaboration, I developed several key patterns that support specialists loved (i.e. a confirmation step at the end of the ticket transfer process).
            </p>
            <p>
            Then I built a high-fidelity prototype in Figma using our internal design system library. I included a landing page that easily guided stakeholders to several distinct parts of the prototype. This was especially useful for communicating my designs remotely with employees across the world.
            </p>
            <ImageWrapper className="spacing-medium-top">
              <img src={airbnbTransfersProto2} alt="I used this lo-fi prototype to brainstorm with the developers on how a sheet pattern could be implemented." />
            </ImageWrapper>
            <p aria-hidden="true" className="micro-text spacing-small-top caption-text">I used this lo-fi prototype to brainstorm with the developers on how a sheet pattern could be implemented.</p>
          </SectionContent>
        </Section>

        {/* Section 5 */}
        <Section className="spacing-large-top">
          <SectionHeader>Gaining buy-in</SectionHeader>
          <SectionContent>
            <p>
            I reviewed my design decisions with customer support leaders at a roundtable session. One detail that was scrutinized was eliminating the ability for support specialists to manually choose where a ticket should be transferred. Instead, my design relies on an existing database that contains ticket routing logic.
            </p>
            <p>
            I felt confident with this decision because I had extensively reviewed the impact of this new process with support specialists and the feasibility of utilizing this database with our developers. However, I learned that this choice created operational difficulties as it would require our team in Dublin to rewrite support specialist workflows. In situations like these, I value stepping back, empathizing, and finding common ground.
            </p>
            <p>
            As a customer-centric organization, I framed my decision through the lens of our hosts and guests. By sharing the stories I gathered of frustrated customers being endlessly transferred due to misescalations, I was able to gain buy-in and move forward with my final design.
            </p>
          </SectionContent>
        </Section>

        {/* Section 6 */}
        <Section className="spacing-large-top">
          <SectionHeader>Results</SectionHeader>
          <SectionContent>
            <p>
            My design met our goal of reducing the rate of misescalations by essentially eliminating their possibility. When a support specialist must transfer a ticket, they can now focus on providing the best experience to the customer rather than worrying about making a mistake.
            </p>
            <p>
            By adhering to our internal design system (and contributing one update), I ensured my design was fully accessible and able to be built swiftly.
            </p>
            <p>
            Due to COVID-19’s impact on travel, I was unfortunately laid off from Airbnb before I could collect quantitative data about my end product. I would have liked to measure which ticket topics require the use of this transfer feature most and also the time it takes to solve tickets that involve a transfer. But through beta testing, I received very positive qualitative feedback on the new feature.
            </p>
          </SectionContent>
        </Section>
        
      </motion.div>
    );
}

export default AirbnbTransfers;