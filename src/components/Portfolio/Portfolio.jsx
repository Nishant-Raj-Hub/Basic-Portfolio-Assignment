import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../../assets/img/project-img1.png";
import project2 from "../../assets/img/project-img2.png";
import project3 from "../../assets/img/project-img3.png";
import "./Portfolio.css";

const Portfolio = () => {
  const webProjects = [
    {
      title: "Project 1",
      description: "Project description",
      imgUrl: project1,
      href: "#",
    },
    {
      title: "Project 2",
      description: "Project description",
      imgUrl: project2,
      href: "#",
    },
    {
      title: "Project 3",
      description: "Project description",
      imgUrl: project3,
      href: "#",
    },
    {
      title: "Project 4",
      description: "Project description",
      imgUrl: project2,
      href: "#",
    },
    {
      title: "Project 5",
      description: "Project description",
      imgUrl: project3,
      href: "#",
    },
    {
      title: "Project 6",
      description: "Projec description",
      imgUrl: project1,
      href: "#",
      
    },
  ];

  return (
    <div id="portfolio" className="portfolio-container">
      <div>
        <h1 className="portfolio-heading">
          <strong className="portfolio-text">PORTFOLIO</strong>
        </h1>
      </div>
      <div className="project-card-container">
        {webProjects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
