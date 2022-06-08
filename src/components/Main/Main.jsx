import React from 'react';
import './main.css';
import AnimalList from '../AnimalList/AnimalList.jsx';
import background from '../../background.png';

export default function Main({ animals }) {
  return (
    <main className="bg" style={{ backgroundImage: `url(${background})` }}>
      <AnimalList animals={animals} />
    </main>
  );
}
