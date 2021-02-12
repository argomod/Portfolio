import React from 'react';
import { motion } from "framer-motion";
import { Animation }  from '../../Global';
import { Helmet } from "react-helmet";
import ImageWrapper from './components/ImageWrapper';
import BackHome from '../../components/BackHome';
import airbnbScreenSharingVideo1 from './assets/airbnb-screen-sharing-video-1.mp4';
import airbnbScreenSharingBlueprint from './assets/airbnb-screen-sharing-blueprint.png';
import airbnbScreenSharing1 from './assets/airbnb-screen-sharing-1.png';
import airbnbScreenSharing2 from './assets/airbnb-screen-sharing-2.png';
import airbnbScreenSharingVideo2 from './assets/airbnb-screen-sharing-video-2.mp4';


//Page data
const Page = {
  title: 'Screen Sharing for Airbnb'
}
// const noBottomPadding = {
//   padding-bottom:0px;
// }

//COMPONENT
function AirbnbScreenSharing() {
    return (
      <motion.div initial="initial" animate="in" exit="out" variants={Animation.variants} transition={Animation.transition}>

        <Helmet><title>{Page.title + " – Matt Argo"}</title></Helmet>

        <BackHome />

        <div>
          <h1 className="spacing-small-bottom">A tool for real-time website & app support for Airbnb.</h1>
          <p className="light-text">I worked with four engineers, a project manager, and a writer to build Screen Sharing. This took 3 months while I worked 50% on one other project. I utilized service blueprints, prototypes, and accessibility design reviews.</p>
          <ImageWrapper className="spacing-medium-top">
            <video autoplay="autoplay" playsinline="playsinline" loop style={{marginBottom: "-.28em"}} name="Airbnb Screen Sharing demo">
              <source src={airbnbScreenSharingVideo1} type="video/mp4" />
            </video>
          </ImageWrapper>
          <p className="small-text spacing-small-top caption-text"><a target="_blank" href="https://www.figma.com/proto/DRnQMhyhUPvnCUGIVNGLzC/Screen-sharing-(fka-cobrowse)?node-id=2851%3A3476&viewport=-1247%2C279%2C0.3149266242980957&scaling=scale-down">View all of my final customer-facing designs for Screen Sharing in Figma.</a></p>
        </div>

        <div className="spacing-large-top">
          <h2>The problem</h2>
          <p>
          More than 30% of Airbnb’s customer service requests are about confusion while using the website or app. Support specialists used the live website (or their memory) to troubleshoot issues. But as the Airbnb platform grew, it became impossible to them to maintain up to date knowledge of all the UI variations customers might encounter.</p>
          <p>
          As a result, specialists and customers relied on sending each other screenshots, or attempting to describe the issue they’re encountering through text – a frustrating experience for a jet-lagged guest who needs to find a lockbox code, or for a host who can’t update their availability calendar after an app update.
          </p>
          <p>
          This project set out to build a new, scalable way for support specialists and customers to communicate about the UI they are seeing in real-time. To do this, I collaborated remotely with talent across various offices and time zones.
          </p>
        </div>

        <div className="spacing-large-top">
          <h2>Service blueprints & project scoping</h2>
          <p className="spacing-small-bottom">
          Our leadership had already imagined a direction involving cobrowse technology, or software that allows a support specialist to see and interact with a customer’s screen in real-time. I made it my first task to validate this direction with actual support specialists. I created <a target="_blank" href="https://www.nngroup.com/articles/service-blueprints-definition/">service blueprints</a> that served the purpose of mapping:
          </p>
          <ol>
            <li>The customer journey.</li>
            <li>Frontstage actions a support specialist needs to take that are visible to the customer.</li>
            <li>Backstage actions a support specialist needs to take that should be invisible to the customer.</li>
            <li>Support processes that need to exist so Airbnb support specialists can deliver quality help.</li>
          </ol>

          <ImageWrapper className="spacing-medium-top">
            <img src={airbnbScreenSharingBlueprint} alt="I made several of these service blueprints to map out the most common customer service scenarios where this new product would be used." />
          </ImageWrapper>
          <p aria-hidden="true" className="small-text spacing-small-top spacing-medium-bottom caption-text">I made several of these service blueprints to map out the most common customer service scenarios where this new product would be used.</p>


          <p className="spacing-medium-top">
          What I discovered is that support specialists’ chief concern was preserving trust with the customer. They noted that this experience of sharing a screen ought to feel personal but still unintrusive. For example, support specialists did not want to access more information or perform more actions than absolutely necessary. They also wanted to clearly signify to the customer when they are viewing their screen. These became design requirements.
          </p>
          {/* <p>
          Reviewing these findings with my project manager, we were able to define the scope of this project. We would utilize our customer service messaging platform to allow support specialists to launch an experience which would allow them to view, scroll, and highlight elements on the screen of the customer they are talking on the phone with (with the goal of introducing live chat functionality in the future).
          </p> */}
          
          <ImageWrapper className="spacing-medium-top">
            <img src={airbnbScreenSharing1} alt="I tested this prototype I built based upon the service blueprints with our support specialists. This allowed us to determine which features were necessary and which weren't." />
          </ImageWrapper>
          <p aria-hidden="true" className="small-text spacing-small-top spacing-medium-bottom caption-text">I tested this prototype I built based upon the service blueprints with our support specialists. This allowed us to determine which features were necessary and which weren't.</p>


        </div>

        <div className="spacing-large-top">
          <h2>Iterations & accessibility reviews</h2>
          <p>
          Before I focused on visual work, I first studied the code behind our cobrowsing software so I could talk with the engineers about design constraints. For example, I learned that Airbnb’s large user base made it currently impossible for the cobrowsing software to connect a customer to the same support specialist they were talking on the phone with. But together, we cleverly adjusted one step in the flow so that we could quickly identify which customer the support specialist should be connected with.
          </p>
          <p>
          As I transitioned from sketches to low-fidelity concepts, it was important to share my ideas early and frequently with anyone across the organization whose own work I might be affecting. To do this, I set up design reviews, presented my work during open critiques, or simply Slacked colleagues with a custom Figma prototype.
          </p>

          <ImageWrapper className="spacing-medium-top">
            <img src={airbnbScreenSharing2} alt="A sample of the icon documentation I created for our design system team to formally add it to our library." />
          </ImageWrapper>
          <p aria-hidden="true" className="small-text spacing-small-top spacing-medium-bottom caption-text">A sample of the icon documentation I created for our design system team to formally add it to our library.</p>

          <p>
          The best feedback I gained was from Airbnb’s Accessibility & Inclusive Design Council. While my designs utilized accessible components, I was encouraged to step back and test the experience from a screen reader user’s perspective. I discovered that I had introduced unnecessary audio clutter into the design, which signified areas in which I could simplify the experience for all users. Easier comprehension aligned with my goal of building trust with the customer.
          </p>

          <ImageWrapper className="spacing-medium-top">
            <video autoplay="autoplay" loop playsinline="playsinline" style={{marginBottom: "-.28em"}} name="Airbnb Screen Sharing demo">
              <source src={airbnbScreenSharingVideo2} type="video/mp4" />
            </video>
          </ImageWrapper>
          <p className="small-text spacing-small-top caption-text">Because the customer will be on the phone with a support specialist, a floating action button in the corner of the screen provides unnecessary audio and visual feedback. A simple outline around the screen is a better experience.</p>



        </div>

        <div className="spacing-large-top">
          <h2>Results</h2>
          <p>
          I concluded my process by creating high-fidelity prototypes of key Screen Sharing flows to share with stakeholders, such as our legal and business teams. I also thoroughly documented the specifications for my customer-facing designs across desktop, tablet, mobile, and the app for a smooth developer hand-off. Lastly, we were able to build a quick beta for several support specialists to test (which was met with enthusiastic feedback).
          </p>
          <p>
          My final design for Screen Sharing allows Airbnb customers to share their mobile or desktop screen with the support specialist they are talking on the phone with. Screen Sharing builds trust with the customer through clear communication patterns regardless of their accessibility preferences. The customer maintains full control; they can end Screen Sharing at any moment, and support specialists cannnot click or tap on their behalf.
          </p>
          <p>
          Due to COVID-19’s impact on travel, I was unfortunately laid off from Airbnb before I could collect quantitative data about the final product. I would have liked to measure the time it takes support specialists to solve tickets that use Screen Sharing, and the Net Promoter Score of tickets that use Screen Sharing. And lastly, I would have specifically tested this product with customers who use assistive technologies to find more opportunities to improve this design for all.
          </p>
        </div>
        
      </motion.div>
    );
}

export default AirbnbScreenSharing;