import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete, baseURL}) {

  const renderToys = toys.map(toy => (
    <ToyCard 
      toy={toy}
      key={toy.id}
      onToyDelete={onToyDelete}
      baseURL={baseURL}
    />
  ))
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
