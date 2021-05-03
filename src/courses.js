import React from 'react';
import './courses.css';
import bachatacouple from '../bachatacouple.jpeg';
import bachataladies from '../bachatalady.jpeg';
import bachatashow from '../bachatashow.jpeg';


export default function Courses() {
  return(
    <body className="courses-body">
      <div className="grid">
        
        {/* Card for ladies */}
        <div className="grid-item">
          <div className="card">
            <img className="card-img" src={bachataladies} alt="BachataLadies" />
            <div className="card-content">
              <h1 className="card-header">Bachata Ladies</h1>
              <p className="card-text">
                Bachata for Ladies
              </p>
              <button className="card-btn">Read more... <span>&rarr;</span></button>
            </div>
          </div>
        </div>

        {/* Card for couples */}
        <div className="grid-item">
          <div className="card">
            <img className="card-img" src={bachatacouple} alt="BachataCouple" />
            <div className="card-content">
              <h1 className="card-header">Bachata Couples</h1>
              <p className="card-text">
                Bachata for Couples
              </p>
              <button className="card-btn">Read more... <span>&rarr;</span></button>
            </div>
          </div>
        </div>

        {/* Card for show group */}
        <div className="grid-item">
          <div className="card">
            <img className="card-img" src={bachatashow} alt="BachataShow" />
            <div className="card-content">
              <h1 className="card-header">Bachata Show Group</h1>
              <p className="card-text">
                Bachata Show Team
              </p>
              <button className="card-btn">Read more... <span>&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}