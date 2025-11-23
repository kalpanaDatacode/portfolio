import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm py-3">
      <div className="row mx-0 align-items-center">
        <div className="col d-flex overflow-auto gap-3 ms-3 align-items-center">
          <a href="#home" className="text-dark text-decoration-none">Home</a>
          <a href="#about" className="text-dark text-decoration-none">About</a>
          <a href="#services" className="text-dark text-decoration-none">Services</a>
          <a href="#projects" className="text-dark text-decoration-none">Projects</a>
          <a href="#contact" className="text-dark text-decoration-none">Contact</a>
        </div>
        <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end mt-2 mt-md-0 me-3">
          <a href="/Resume.jpeg" className="btn fw-bold px-4 text-white" style={{ backgroundColor: "#FD6F00" }}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
