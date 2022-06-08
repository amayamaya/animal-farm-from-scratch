// import AnimalList.css later
import React from 'react';

import Animals from '../Animals/Animals.jsx';

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((animal, i) => (
        <Animals {...animal} key={animal.name + i} />
      ))}
    </div>
  );
}
