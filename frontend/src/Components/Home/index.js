import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="col-8 text-center home">
      <div className="row">
        <div className="col">
          <img
            src="https://cdn.discordapp.com/attachments/709286174879121519/1085313667924496574/E2-VnK2X0AAKYxT.png?ex=65e78e9e&is=65d5199e&hm=3ae215c240525ceffc076a457ddf9a3775c32a12e29a997a9c980db9adc4f011&"
            alt=""
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
