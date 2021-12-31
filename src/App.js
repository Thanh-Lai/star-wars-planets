import React, { useState, useEffect } from 'react';
import './App.css';
import { Table, Error, Loading } from './Components';

function App() {
  const SwapiURL = 'https://swapi.dev';
  const [ planets, setPlanets ] = useState([]);
  const [ isError, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    fetchPlanets().then((planets) => {
      setPlanets(planets);
      setError(false);
      setLoading(false);
    });
  }, [])

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SwapiURL}/api/planets`);
      const planets = await response.json();
      return planets.results;
    } catch(error) {
      console.error('Planet Fetch Error', error);
      setError(true);
      throw error;
    }
  }
  if (isError) return <Error />;
  if (isLoading) return <Loading />
  return (
    <div className="App">
      <header className="App-header">
          <h1>Star Wars Planets</h1>
      </header>
    </div>
  );
}

export default App;
