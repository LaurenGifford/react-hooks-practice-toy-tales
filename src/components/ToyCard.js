import React, {useState} from "react";

function ToyCard({toy, onToyDelete, baseURL}) {
  let {id, name, image, likes = 0} = toy
  const [currentLikes, setCurrentLikes] = useState(likes)

  function handleDelete() {
    fetch(`${baseURL}/${id}`, {
      method: "DELETE"
    })
    onToyDelete(id)
  }

  function handleUpdate() {
    fetch(`${baseURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify({likes: currentLikes + 1})
    })
    .then(response => response.json())
    .then(data => setCurrentLikes(data.likes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{currentLikes} Likes </p>
      <button onClick={handleUpdate} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
