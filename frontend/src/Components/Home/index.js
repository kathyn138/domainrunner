import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="col-8 text-center home">
      <div className="row">
        <div className="col">
          <img
            src="../../public/paimon-home.png"
            alt="home logo"
          ></img>
        </div>
        <div className="col">
          <p>Farming Impact helps you plan what to farm on which days.</p>
          <p>Choose some characters or weapons to get started!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
