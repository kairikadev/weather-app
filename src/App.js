import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import axios from "axios";
import Footer from "./Footer";


function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
       
        
       <Weather />
      
       </div>
       <Footer />
    </div>
  );
}

export default App;
