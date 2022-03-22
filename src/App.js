import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import PokemonPic from './assets/PokemonScreenshot.PNG';
import AlienPic from './assets/AlienScreenshot.PNG';
import CabinetPic from './assets/CabinetScreenshot.PNG';

function App() {
  return (
    <div className="App">
      <div className="Header"><Header /></div>

      <div id="AboutMe">
        <h2>About Me</h2>
        <p>I was born and raised in Austin, Texas. In my spare time I enjoy reading new books, watching movies or playing games with my friends. 
          I also do my best at knitting (strictly rectangular objects). I have a Bachelor's degree in Computer Science from Texas State University. 
          The work included here is a result of my work in the UT Austin Full Stack Web Development Bootcamp.</p>
      </div>

      <br />

      <div id="MyWork">
        <h2>My Work</h2>
        <Project 
          className="ProjectClass"
          src="https://ribbonanarchy.github.io/PokemonVsNature/" 
          projName="Pokemon Vs. Nature"
          picPath={PokemonPic}
        />
        <br />
        <Project 
          className="ProjectClass"
          src="https://take-me-to-your-leader.herokuapp.com/login" 
          projName="Take Me To Your Leader"
          picPath={AlienPic}
        />
        <br />
        <Project 
          className="ProjectClass"
          src="https://mern-curiosity-cabinet.herokuapp.com/" 
          projName="Curiosity Cabinet"
          picPath={CabinetPic}
        />
      </div>

      <br />

      <div id="ContactMe">
        <h2>Contact Me</h2>
      </div>

      <br />

      <div id="Resume">
        <h2>Resume</h2>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
