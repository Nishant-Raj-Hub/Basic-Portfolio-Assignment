import React from "react";

const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <div className="project-card">
      <a id="projectatag" href={href}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
