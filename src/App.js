import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const rendredAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{rendredAnimals}</div>
    </div>
  );
}

export default App;
