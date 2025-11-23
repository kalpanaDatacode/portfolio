import React from "react";

const Card1 = ({ image, para, category, link, className }) => {
  return (
    <div
      className={`card text-center shadow-sm border-0 mx-auto my-3 ${className}`}
      style={{ maxWidth: "20rem" }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none d-flex flex-column h-100"
      >
        <div className="p-2">
          <img
            src={image}
            className="card-img-top img-fluid mx-auto d-block"
            alt="project"
            style={{ height: "180px", objectFit: "cover" }} // ✅ keeps images uniform
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title" style={{ color: "#FD6F00" }}>
            {category}
          </h6>
          <p className="card-text fw-bold text-dark">{para}</p>
          <span className="mt-auto"></span>
        </div>
      </a>
    </div>
  );
};

export default Card1;
