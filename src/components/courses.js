import React, { useState, useEffect } from 'react';
import './courses.css';
import fetch from '../api/fetch';


const Courses = () => {

  const [getCourse, setCourses] = useState([]);

  useEffect(() => {
    fetch.getCourse()
        .then(data => setCourses(data))
    }, [])

  return(
    <body className="courses">
      {getCourse.map((course) => (
      <div key={course.id} className="grid">

        {/* Card for ladies */}
        <div className="grid-item">
          <div className="card">
            <img className="card-img" src={course.image} alt="BachataLadies" />
            <div className="card-content">
              <h2 className="card-header">{course.name}</h2>
              <p className="level">{course.level}</p>
              <p className="card-text">
                {course.description}
              </p>
              <button className="card-btn">Read more... <span>&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>
       ))}
    </body>
  );
}

export default Courses;