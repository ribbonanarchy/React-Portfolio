import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Project src="PokemonVsNature"/>
      <Project src="TakeMeToYourLeader"/>
      <Project src="CuriosityCabinet"/>
      <Footer />
    </div>
  );
}

export default App;
