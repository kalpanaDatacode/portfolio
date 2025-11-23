import React from "react";

export default function DataScienceAssignment() {
  const videoLinks = [
    { title: "Assignment Videos", url: "https://youtube.com/playlist?list=PLqoG8a0j7tzFknIgbon4mXxjebPQ9SYF8&si=E0rxPoeGhpNsdTyH" },
    { title: "Internal 1", url: "https://youtube.com/playlist?list=PLqoG8a0j7tzFknIgbon4mXxjebPQ9SYF8&si=E0rxPoeGhpNsdTyH" },
    { title: "Internal 2", url: "https://youtube.com/playlist?list=PLqoG8a0j7tzFknIgbon4mXxjebPQ9SYF8&si=E0rxPoeGhpNsdTyH" },
  ];

  const certificates = [
      {
      title: "AI/ML Internship",
      issuer: "Edunet Foundation",
      year: "2025",
      link: "edunetinternshipcertificate.png"
    }, 
     {
      title: "AI/ML Internship",
      issuer: "Techsaksham Foundation",
      year: "2024",
      link: "Techsakshaminternship.png"
    }, 
    {
      title: "Angular Certificate",
      issuer: "Infosys SpringBoard",
      year: "2025",
      link: "angular.png"
    }
   
  ];

  const achievements = [
  "Completed two internships in AI/ML at TechSaksham Foundation and Edunet Foundation.",
  "Selected for Infosys Springboard Internship (Full Stack Developer) – currently pursuing.",
  "Pursuing DataCode.in Community Internship where I am working on live real-world projects.",
  ];

  return (
    <div className="ds-section container py-5">

      {/* Main Heading */}
      <h1 className="mb-4 ds-heading">Data Science Assignment</h1>

      {/* Video Lectures */}
      <div className="p-4 mb-5 rounded shadow-sm ds-box">
        <h2 className="mb-3 sub-heading">Video Lectures</h2>

        <ul className="list-group">
          {videoLinks.map((video, i) => (
            <li key={i} className="list-group-item">
              <a href={video.url} target="_blank" className="video-link">
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificates + Achievements */}
      <div className="p-4 rounded shadow-sm ds-box">

        <h2 className="mb-4 sub-heading">Certificates & Achievements</h2>

        {/* Certificates */}
        <div className="row mb-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card cert-card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text">{cert.issuer}</p>
                  <p className="text-muted">{cert.year}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    className="btn btn-sm" 
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h3 className="mb-3">Achievements</h3>
        <ul className="list-group">
          {achievements.map((item, i) => (
            <li key={i} className="list-group-item">
              ✔ {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
