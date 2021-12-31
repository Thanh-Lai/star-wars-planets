import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const SwapiURL = 'https://swapi.dev';
  useEffect(() => {
    fetchPlanets();
  }, [])

  const fetchPlanets = async () => {
    try {
      const response = await fetch(`${SwapiURL}/api/planets`);
      const planets = await response.json();
      return planets.results;
    } catch(error) {
      console.error('Planet Fetch Error', error);
      throw error;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>Star Wars Planets</h1>
      </header>
    </div>
  );
}

export default App;
