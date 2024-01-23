import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='Main'>
      <h1>
        Welcome to <span>Costs</span>
      </h1>
      <p>Start managing your projects now!</p>
      <Link to="/newproject" className="Button">
        <h2>Start new project</h2>
      </Link>
      <div>
        <img src="/porquinho.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
