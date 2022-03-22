import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <div className="Header"><Header /></div>

      <div id="AboutMe">
        <h2>About Me</h2>
      </div>

      <br />

      <div id="MyWork">
        <h2>My Work</h2>
        <Project src="PokemonVsNature"/>
        <Project src="TakeMeToYourLeader"/>
        <Project src="CuriosityCabinet"/>
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
