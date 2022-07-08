import './App.css';
//import  Nav from './components/header/Nav';
import  Header from './components/header/Header';
import  Benefits  from './components/benefits/Benefits';
import  Text  from './components/text/Text';
import  Steps  from './components/steps/Steps';
import  Footer  from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Benefits />
      <Text />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
