import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Nav from "./components/Nav";
import Results from "./components/Results";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const openWeaterApiKey = "f305f00f0b71f3802101ed7c7f815885";
  const [weatherData, setweatherData] = useState(null);
  const [fetchError, setFetchError] = useState('');

  const getWeather = async (city, geo) => {
    try {
      let res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          city +
          "&appid=" +
          openWeaterApiKey +
          "&units=metric"
      );
      
      if (res.ok) {
        let data = await res.json();
        setweatherData(data);
      } else {
        console.log("errore chiamata");
        setFetchError('Api Call Error!');
      }
    } catch (error) {
      setFetchError('Something went wrong!');
    }
  };

  return (
    <div className="App">
      <Nav getWeather={(query) => getWeather(query)} />
      <Results weatherData={weatherData} fetchError={fetchError}/>
      <Footer />
    </div>
  );
}

export default App;
