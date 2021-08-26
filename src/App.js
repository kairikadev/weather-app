import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import Search from "./Search";
import Footer from "./Footer";


function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
       <Search /> 
        
       <Weather  city="Tallinn"/>
      
       </div>
       <Footer />
    </div>
  );
}

export default App;
