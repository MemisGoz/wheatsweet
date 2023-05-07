import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [query, setQuery] = useState('Copenhagen');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=5e057f5315d795b8233986c3dce7fea9&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch {
      setError(alert("City or Country not found"));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='overlay'>
        <div className='container'> 
        {weatherData && (
            <div>
          <div className='header-container'>
            <h4>Sweet Weather</h4>
            <h4>Made By Memis Gøz</h4>
          </div>
          <div className='hero-container'>
            <h1>{weatherData.name}</h1>
            <h2>{weatherData.main.temp.toFixed(0)}°</h2>
            <input
              type="text"
              
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="icon-text">
            <h3>{weatherData.weather[0].description} </h3>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            </div>
          </div>
          <div className='info-container'>
            <div>
              <h4>Min Temp</h4>
              <h3>{weatherData.main.temp_min.toFixed(0)}°</h3>
            </div>
            <div>
              <h4>Max Temp</h4>
              <h3>{weatherData.main.temp_max.toFixed(0)}°</h3>
            </div>
            <div>
              <h4>What it feels like</h4>
              <h3>{weatherData.main.feels_like.toFixed(0)}°</h3>
            </div>
          </div>
          </div>
          )}
        </div>
      
    </div>
  );
}

export default Main;
