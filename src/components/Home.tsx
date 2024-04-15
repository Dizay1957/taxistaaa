import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Taxi Service App</h2>
      <p>Sign in as:</p>
      <ul>
        <li>
          <a href="/login">Client</a>
        </li>
        <li>
          <a href="/login">Taxi Agency</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
