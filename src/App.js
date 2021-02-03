import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  const [displayData, setDisplayData] = useState('');
  const handleClick = (selected, number) => {
    axios.get(`http://swapi.dev/api/${selected}/${number}`)
      .then(response => {
        setDisplayData(response.data);
        navigate(`/${selected}/${number}`);
      })
  }

  return (
    <div className="App">
      <Searchbar handleClick={handleClick} />
      <Router>
        <People path="/people/:number" displayData={displayData} />
        <Planets path="/planets/:number" displayData={displayData} />
      </Router>
    </div>
  );
}

export default App;