import React from 'react';
import GithubIcon from '../assets/github-icon.png';
import LinkedInIcon from '../assets/linkedin-icon.png';
import '../App.css';

export default function Footer() {


    return(
        <div>
            <br />
            <br />
            <a href="https://github.com/ribbonanarchy">
                <img className="smallIcon" src={GithubIcon} alt="Github icon"/>
            </a> 
            <a href="https://www.linkedin.com/in/robyn-arnecke/">
                <img className="smallIcon" src={LinkedInIcon} alt="LinkedIn icon"/>
            </a>
        </div>
    );
}