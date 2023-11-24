import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './joke.css';

const Joke = () => {
  const [state, setState] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setState(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="jokebox">
      <h2 className="title">Dad Joke Page</h2>
      <div>
        <Link to="/" className="homelink">Back to Home</Link>
        <div className="innerbox">
          <p className="joketext">{state}</p>
          <button className="nextButton" onClick={fetchJoke}>Next Joke</button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
