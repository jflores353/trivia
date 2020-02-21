import React, {useState} from "react";
import {Link} from "react-router-dom"

export default function SaveScoreForm({ score }) {
    const [username, setUsername] = useState('')

    const userNameChange = (e) => {
        const updatedUsername = e.target.value
        setUsername(updatedUsername)
    }

    const saveHighScore = (e) => {
        e.preventDefault()
        const record = {
            name: username,
            score: score
        }
        console.log(record)
    }

  return (
    <div className="container">
      <h1>Score: {score}</h1>
      <form onSubmit={saveHighScore}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Your User Name"
          value={username}
          onChange={userNameChange}
        />
        <button type="submit" className="btn" disabled={!username}>
          Save
        </button>
      </form>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}
