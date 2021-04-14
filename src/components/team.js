import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
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
              <div class="card">
                <img src={instructor.image} alt="{instructor.firstName}" className='image'/>
                  <div class="container">
                    <h2>{instructor.firstName} {instructor.lastName}</h2>
                    <p className="p1">
                      <Popup
                        trigger={<button className="button"> READ MORE... </button>}
                        modal
                        nested
                      >
                        {close => (
                          <div className="modal">
                            <button className="close" onClick={close}>&times;</button>
                              <div className="header"> {instructor.firstName} {instructor.lastName}</div>
                                <div className="content">
                                {' '}
                                  {instructor.description}
                                </div>
                                  <div className="actions">
                                  <span>
                                    ...
                                  </span>
                                  <button
                                    className="button1"
                                    onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                    }}
                                  >
                              Close
                            </button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </p>
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