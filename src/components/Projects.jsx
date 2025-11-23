import React, { useState } from "react";
import Card1 from "../components/Card1";

const Projects = () => {
    const [active, setActive] = useState("Web Development");

    return (
        <section id="projects" className="py-2">
            <h1 className="text-center fw-bold mb-3">Projects</h1>
            <p className="text-center text-muted mb-5 px-5 px-md-5 lh-base">
                Here are some of the projects I’ve worked on, ranging from responsive <br />
                frontend web applications to a beginner-level AI/ML experiment.<br />
                Each project reflects my skills, creativity, and eagerness to explore<br />
                new technologies.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
                <button
                    className={`button11 btn button-outline-warning rounded-pill border-0 px-3 ${active === "All" ? "active" : ""
                        }`}
                    onClick={() => setActive("All")}
                >
                    All
                </button>
                <button
                    className={`button11 btn button-outline-warning rounded-pill border-0 px-3 ${active === "Web Development" ? "active" : ""
                        }`}
                    onClick={() => setActive("Web Development")}
                >
                    Web Development
                </button>
                <button
                    className={`button11 btn button-outline-warning rounded-pill border-0 px-3 ${active === "AI/ML" ? "active" : ""
                        }`}
                    onClick={() => setActive("AI/ML")}
                >
                    AI/ML
                </button>
            </div>
            <div className="row mx-0 g-4 d-flex justify-content-center align-items-center ms-md-5 me-md-5 ms-3 me-3">
                {(active === "All" || active === "Web Development") && (
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card1
                            className="h-90"
                            category="Web Development(Html,Css,Js)"
                            para="BLOGYwow"
                            image="project3.jpeg"
                            link="https://kalpanapatidar.github.io/BLOGYwow/"
                        />
                    </div>
                )}

                {(active === "All" || active === "Web Development") && (
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card1
                            className="h-90"
                            category="Web Development(React.js)"
                            para="Swiggy-Clone"
                            image="project1.jpeg"
                            link="https://kalpanapatidar.github.io/swiggy-clone/"
                        />
                    </div>
                )}

                {(active === "All" || active === "AI/ML") && (
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card1
                            className="h-90"
                            category="AI/ML"
                            para="Employee Salary Prediction App"
                            image="project2.jpeg"
                            link="https://kalpanapatidar-employee-salary-predicti-copy-of-employee-jcevl1.streamlit.app/"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
