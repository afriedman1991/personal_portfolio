import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <li>Hi! My name is Alex, and this is my portfolio.</li>
        <li>Feel free to have a look around using the links below:</li>
        <Link className="App-link" to="/About">About</Link>
        <Link className="App-link" to="/Projects">Projects</Link>
        <Link className="App-link" to="/Contact">Contact</Link>
      </header>
    </div>
  );
}

export default Home;
