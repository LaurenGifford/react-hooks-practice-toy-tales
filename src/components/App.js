import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const baseURL = 'http://localhost:3001/toys'

  useEffect(() => {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleToyAdd(newToy) {
    setToys([...toys, newToy])
  }

  function handleDonation(toyId) {
    const filteredToys = toys.filter(toy => toy.id !== toyId)
    setToys(filteredToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm baseURL={baseURL} onToySubmit={handleToyAdd} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer baseURL={baseURL} toys={toys} onToyDelete={handleDonation}/>
    </>
  );
}

export default App;
