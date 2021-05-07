import React, { useEffect, useState } from 'react';
import './events.css';
import fetch from '../api/fetch';
import white from '../white.jpeg';

const Events = () => {
    const [getEvents, setEvents] = useState([]);

    useEffect(() => {
    fetch.getEvents()
        .then(data => setEvents(data))
    }, [])
    return(
        <body className="events-body">
            {getEvents.map((events) => (
            <div class="scene">
                <div key={events.id} className="card-events">
                    <div className="card__face card__face--front">
                        <img src={events.image} alt=""/>
                        <h1 className="event-header">{events.name}</h1>
                    </div>
                    <div className="card__face card__face--back">
                        <img src={white} alt=""/>
                        <p className="event-description">{events.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </body>
    )
}

export default Events;