import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer'

function App() {
  return (
    <div className="App">
      <div className="Header"><Header /></div>
      
      <PageContainer />

      <Footer />
    </div>
  );
}

export default App;
