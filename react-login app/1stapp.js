import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log(`User ${username} is trying to log in.`);
    console.log(`Password: ${password}`);
    setUsername("");
    setPassword("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <span className="material-icons-outlined">place</span>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </div>
        <Fab color="primary" aria-label="add"></Fab>
      </header>
    </div>
  );
}

export default App;
