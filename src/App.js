// import logo from '../public/akeed.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
