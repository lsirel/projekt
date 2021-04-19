import React, {useState, useEffect} from 'react';
import './about.css';
import fetch from '../api/fetch';

const About = () => {
  const [getAbout, setAbout] = useState([]);

  useEffect(() => {
    fetch.getAbout()
        .then(data => setAbout(data))
    }, [])

    return(
      <div>
        <h1>About Us</h1>
        {getAbout.map((about) => (
        <div key={about.id} className="about-section">
          <img src={about.image} alt="{about.teamPic}" className="teampic"/>
          <div className="inner-container">
            <p className="text">
              {about.description}     
              </p>
          </div>
        </div>
        ))}
    </div>
    );
};

export default About;