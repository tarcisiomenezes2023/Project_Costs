import React from 'react'
import './Home.css';

function Home() {
  return (
    <div className='Main'>
      <h1>Welcome to <span>Costs</span></h1>
      <p>Start managing your projects now!</p>
      <div><button>Build Project</button></div>
      <div>
        <img src="/porquinho.png" alt=""/>
      </div>
    </div>
  )
}

export default Home
