import React, {useState, useEffect} from 'react';
import './packages.css';
import fetch from '../api/fetch';

const Packages = () => {
  const [getPackages, setPackages] = useState([]);

  useEffect(() => {
    fetch.getPackages()
        .then(data => setPackages(data))
    }, [])

    return(
      <div className="container">
        <h1 className="title">Dance packages</h1>
        <div  className="cards">
        {getPackages.map((packages) => (

          <div key={packages.id} className="cardrow" id="card-1">
            <h1 className="card-title">{packages.name}</h1>
            <h2 className="card-price" id="course1-price"> {packages.price}€ <span> / month</span><span className="youth1"> 44€ youth ≤ 26</span> </h2>
            <ul className="card-plan">
              <li>{packages.description}</li>
            </ul>
            <div className="openBtn">
              <button type="button" className="card-btn"> SELECT</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
};

export default Packages;