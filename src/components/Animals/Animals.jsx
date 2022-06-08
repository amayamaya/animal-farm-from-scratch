import React from 'react';




export default function Animals({ name, type, says }) {
  return (
    <div className="animal-list">
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
      <img src={`/images/${type}.svg`} />
    </div>
  );
}
