import React, { useState } from "react";
import Card3 from "./Card3";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="mt-5 text-center">
      <h1>Testimonials</h1>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>


      <div
        className="d-flex overflow-auto hide-scrollbar justify-content-start"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <Card3
          image="Ellipse 11.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          name="John Doe"
          role="CEO"
          active={activeIndex === 0}
        />

        <Card3
          image="Ellipse 10.png"
          text="Dolorum dicta ullam minus voluptatibus repellendus debitis"
          role="Manager"
          active={activeIndex === 1}
        />

        <Card3
          image="Ellipse 11.png"
          text="Officiis architecto voluptatibus tempora veniam dolore."
          name="Alex Ray"
          role="Designer"
          active={activeIndex === 2}
        />
      </div>

      <div className="mt-3">
        <button
          className={`rect-btn ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => setActiveIndex(0)}
        >
          1
        </button>
        <button
          className={`rect-btn ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => setActiveIndex(1)}
        >
          2
        </button>
        <button
          className={`rect-btn ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => setActiveIndex(2)}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
