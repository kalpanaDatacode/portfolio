import React from "react";

const Card3 = ({ image, text, name, role, active }) => {
  return (
    <div
      className={`testimonial-card card shadow-sm p-3 m-2 d-flex flex-row align-items-center ${active ? "active" : "inactive"
        }`}
      style={{ minWidth: "70%", transition: "0.3s" }}
    >
      <img
        src={image}
        alt="user"
        className="rounded-circle me-3"
        width="80"
        height="80"
      />

      <div>
        <p className="card-text">{text}</p>
        <h5 className="card-title">{name}</h5>
        <p className="text-muted">{role}</p>
      </div>
    </div>
  );
};

export default Card3;
