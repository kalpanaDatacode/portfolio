import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-4" id="hero">
      <div className="row mx-0 d-flex justify-content-center align-items-center me-2 ms-2">
        <div className="col-12 col-md-5 order-2 order-md-1">
          <h5 className="text-muted">Hi, I am</h5>
          <h2 className="fw-bold" style={{ color: "#FD6F00" }}>
            Kalpana Patidar
          </h2>
          <h1>Web Developer</h1>
          <p className="mt-3">
  A passionate developer currently pursuing my MCA-Integrated (5 year) 
  at the International Institute of Professional Studies (IIPS), Indore. 
  I enjoy building responsive and user-friendly web applications where 
  clean design meets efficient code.
</p>

            
           <div className="d-flex gap-3 text-center">        
          <a href="Resume.jpeg" className="text-decoration-none text-dark">
            <button
              className="btn btn-md text-white px-3"
              style={{ backgroundColor: "#FD6F00", borderRadius: "6px" }}
            >
              Hire Me
            </button>
            </a>
           
              <a href="https://www.linkedin.com/in/kalpanapatidar/">
                              <FaLinkedinIn size={20} className="text-dark" />
                          </a>
                          <a href="mailto:kalpanap1105@gmail.com" className="mx-3 text-dark">
                              <FaEnvelope size={20} />
                          </a>
                          <a href="https://github.com/KalpanaPatidar">
                              <FaGithub size={20} className="text-dark" />
                          </a>
                      </div>
          
        </div>
        <div className="col-12 col-md-5 order-1 order-md-2 text-center">
          <img
            src="image.png"
            alt="Hero"
            className="img-fluid rounded-circle mt-3 rounded-full w-12 h-12"
            style={{
              maxWidth: "100%",
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "top"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
