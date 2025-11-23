import React from "react";
import Card from "../components/Card";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <h1 className="text-center fw-bold mb-3">Services</h1>
      <p className="text-center text-muted mb-5 px-2 px-md-5 lh-base">
        I offer a range of services that combine creativity, design, and
        development <br />
        to build engaging and user-friendly digital experiences.
      </p>

      <div className="row mx-0 justify-content-center align-items-stretch g-4 me-md-5 ms-md-5 ms-3 me-3">
        <div className="col-12 col-md-3 d-flex">
          <Card
            className="h-90"
            title="UI/UX"
            image="Vector.png"
            para="Designing intuitive and visually appealing interfaces with a focus on smooth navigation and better user experiences."
          />
        </div>

        <div className="col-12 col-md-3 d-flex">
          <Card
            className="h-90"
            title="AI & ML (Beginner Projects)"
            image="Vector1.png"
            para="Capable of working on basic Artificial Intelligence and Machine Learning projects, with curiosity to explore data-driven solutions."
          />
        </div>

        <div className="col-12 col-md-3 d-flex">
          <Card
            className="h-90"
            title="Responsive Websites"
            image="Group1.png"
            para="Creating fully responsive, mobile-friendly websites using Bootstrap, ensuring compatibility across devices."
          />
        </div>

        <div className="col-12 col-md-3 d-flex">
          <Card
            className="h-90"
            title="Logic Building (C++ & DSA)"
            image="Vector (2).png"
            para="Strong problem-solving foundation with C++ and Data Structures & Algorithms, helping in writing optimized and efficient code."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
