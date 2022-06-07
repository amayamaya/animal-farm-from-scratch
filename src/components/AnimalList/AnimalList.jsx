//import AnimalList.css later

export default function AnimalList({ name, type, says, top, left }) {
  return (
    <div className="animal-list">
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
      <img src={`/public/images/${name}.svg`} />
    </div>
  );
}
