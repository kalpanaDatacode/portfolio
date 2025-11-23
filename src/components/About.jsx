import React from 'react';

const About = () => {
  const progress = [
    { heading: "UI/UX", percentage: 80 },
    { heading: "C++", percentage: 90 },
    { heading: "Python,Java,C", percentage: 70 },
  ];

  return (
    <div className="row mx-0 align-items-center ms-4 me-4 mt-4">
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img className="about-img img-fluid rounded-circle" style={{ maxWidth: "100%", width: "300px", height: "300px" }} src="image2.jpg" alt="About" />
      </div>
      <div className="col-12 col-md-6 text-start about-text">
        <h1>About Me</h1>
        <p>
          With a strong foundation in C++, and familiarity with Python, Java, and C,
          I’ve developed a solid understanding of programming and problem-solving.
          In the field of web development, I have hands-on experience with HTML, CSS,
          JavaScript, and React, which I use to create engaging digital experiences.
        </p>
        {progress.map((item,index) => (
          <div key={index} className="mb-4">
            <h5>{item.heading}</h5>
            <div className="custom-progress">
              <div
                className="custom-progress-fill"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: "#fd6200",
                  height: "10px"
                }}
              >
                <span className="custom-progress-circle"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default About;
