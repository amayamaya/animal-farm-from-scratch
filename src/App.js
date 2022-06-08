import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main animals={animals} />
      <Footer />
    </div>
  );
}

export default App;
