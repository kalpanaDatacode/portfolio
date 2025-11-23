import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const FullPage = () => {
    return (
        <div id="contact">
            <section className="text-center py-5 bg-light">
                <h2 className="fw-bold">Lets Design Together</h2>
                <p className="text-muted ms-2 me-2">
                    I turn ideas into clean, user-friendly <br />
                    interfaces and responsive websites. Tell me <br />
                    your vision—I'll design and build something you’ll be proud to launch.
                </p>
                <div className="row mx-0 justify-content-center mt-4">
                    <div className="col-12 col-md-4 mb-2 mb-md-0 ">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-md-auto">
                        <a href=".navbar">
                            <button className="btn custom-btn fw-bold px-4 w-40 w-md-auto">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-center gap-3 mb-3">
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
    );
};

export default FullPage;
