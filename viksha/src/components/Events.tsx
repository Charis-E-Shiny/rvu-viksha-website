import React from "react";
import "./Events.css";

const events = [
  { name: "Event 1", img: "" },
  { name: "Event 2", img: "" },
  { name: "Event 3", img: "" },
];

const Events: React.FC = () => {
  return (
    <div className="events-section">
      <h2 className="rainbow-heading">What's Happening in Viksha</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-image">
              {event.img ? (
                <img src={event.img} alt={event.name} />
              ) : (
                <span>Image</span>
              )}
            </div>
            <h3 className="rainbow-text">{event.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
