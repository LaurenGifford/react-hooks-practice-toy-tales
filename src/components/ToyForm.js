import React, {useState} from "react";

  function ToyForm({baseURL, onToySubmit}) {
    const [formData, setFormData] = useState({
      name: "",
      image: ""
    })

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    function handleSubmit(e) {
      e.preventDefault()
      fetch(`${baseURL}`, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({...formData})
      })
        .then(response => response.json())
        .then(data => onToySubmit(data))
    }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(e) => handleChange(e)}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
