import React from "react";

const Card = ({ title, image, para, className }) => {
  return (
    <div
      className={`card text-center shadow-sm border-0 mx-auto my-4 ${className}`}
      style={{ width: "100%", maxWidth: "18rem" }}
    >
      <div className="p-3">
        <img
          src={image}
          className="mx-auto d-block"
          alt={title}
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text small text-muted flex-grow-1">{para}</p>
      </div>
    </div>
  );
};

export default Card;
