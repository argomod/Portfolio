import React from 'react';
import '../App.css';

function Footer() {
    return (
      <footer className="spacing-xlarge-top spacing-xlarge-bottom">
        <h3 className="dark-text">Thank you for visiting.</h3>
        <ul>
            <li className="light-text spacing-xsmall-bottom"><a href="mailto:name@rapidtables.com">Send me an email.</a></li>
            <li className="light-text spacing-xsmall-bottom"><a target="_blank" href="https://margomaniz.tumblr.com/">Lurk on my Tumblr.</a></li>
            <li className="light-text spacing-xsmall-bottom"><a target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
        </ul>    
        <p className="micro-text light-text spacing-medium-top">Site built by yours truly in 2020.</p>
      </footer>
    );
}

export default Footer;