import React from "react";
import "./Team.css";

const teamMembers = [
  { name: "", role: "President", photo: "/president.jpg" },
  { name: "", role: "Vice President", photo: "/vice-president.jpg" },
  { name: "", role: "Head of Tech", photo: "/head-tech.jpg" },
  { name: "", role: "Head of Design", photo: "/head-design.jpg" },
  { name: "", role: "Head of PR", photo: "/head-pr.jpg" },
  { name: "", role: "Head of Event", photo: "/head-event.jpg" },
];

const Team: React.FC = () => {
  return (
    <div className="team-section">
      <h1 className="team-title rainbow-text">Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="photo-placeholder">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name || member.role}
                  className="member-photo"
                />
              ) : (
                "Photo"
              )}
            </div>
            <h3 className="member-name rainbow-text">{member.name}</h3>
            <p className="member-role rainbow-text">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;