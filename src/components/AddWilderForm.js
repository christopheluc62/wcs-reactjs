import axios from 'axios';
import React, { useState } from 'react';

function AddWilderForm(props) {
  const [name, setName] = useState('');

  async function onSubmit(event) {
    event.preventDefault();

    await axios.post('http://localhost:5002/api/wilders', {
      name: name,
    });
    setName('');
    props.onWilderCreated();
  }

  return (
    <>
      <h2>Ajouter un wilder</h2>
      <form>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type='submit' onClick={onSubmit}>
          Ajouter
        </button>
      </form>
    </>
  );
}

export default AddWilderForm;
