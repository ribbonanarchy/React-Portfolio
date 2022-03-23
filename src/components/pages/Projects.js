import React from 'react';
import Project from '../Project'
import PokemonPic from '../../assets/PokemonScreenshot.PNG';
import AlienPic from '../../assets/AlienScreenshot.PNG';
import CabinetPic from '../../assets/CabinetScreenshot.PNG';

export default function About() {
  return (
    <div id="MyWork">
        <h2>My Work</h2>
        <Project 
          className="ProjectClass"
          src="https://ribbonanarchy.github.io/PokemonVsNature/" 
          projName="Pokemon Vs. Nature"
          picPath={PokemonPic}
          repo="https://github.com/ribbonanarchy/PokemonVsNature"
        />
        <br />
        <Project 
          className="ProjectClass"
          src="https://take-me-to-your-leader.herokuapp.com/login" 
          projName="Take Me To Your Leader"
          picPath={AlienPic}
          repo="https://github.com/ribbonanarchy/TakeMeToYourLeader"
        />
        <br />
        <Project 
          className="ProjectClass"
          src="https://mern-curiosity-cabinet.herokuapp.com/" 
          projName="Curiosity Cabinet"
          picPath={CabinetPic}
          repo="https://github.com/rkingjr/MERNcuriosityCabinet"
        />
      </div>
  );
}
