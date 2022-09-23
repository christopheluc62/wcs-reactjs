import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Wilder from './components/Wilder';
import AddWilderForm from './components/AddWilderForm';

// Array main methods examples
// wilders.map
// const longNamedWilders = wilders.filter((wilder) => wilder.name.length > 5);
// const longNamedWilder = wilders.find((wilder) => wilder.name.length > 5);
// wilders.reduce

function App() {
  // My API → give me my wilders!
  const [wilders, setWilders] = useState([]);

  const fetch = async () => {
    const result = await axios.get('http://localhost:5002/api/wilders');
    // process result.data
    setWilders(result.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <header>
        <div className='container'>
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className='container'>
        <h2>Wilders</h2>
        <section className='card-row'>
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id}
                name={wilder.name}
                upvotes={wilder.upvotes}
              />
            );
          })}
        </section>
        <AddWilderForm onWilderCreated={() => fetch()} />
      </main>
      <footer>
        <div className='container'>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
