import React, {useState, useEffect} from 'react';
import './team.css';
import fetch from '../api/fetch';


const Instructors = () => {
  const [getInstructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch.getInstructors()
        .then(data => setInstructors(data))
    }, [])

    return(
      
                
      <html>
        <body>
          <h1>Meet the Team</h1>
          <div className="row">
          {getInstructors.map((instructor) => (
            <div key={instructor.id} class="column">
              <div class="team-card">
                <img src={instructor.image} alt="{instructor.firstName}" className='image'/>
                  <div class="instructors-container">
                    <h2>{instructor.firstName} {instructor.lastName}</h2>
                  </div>
                  <div class="tooltip">Read more...
                    <span class="tooltiptext">{instructor.description}</span>
                  </div>
                </div>
              </div>
               ))}
            </div>
          </body>
        </html>
    );
};

export default Instructors;