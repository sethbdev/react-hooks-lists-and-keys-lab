import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {

  const techArray = technologies.map((technology, key) => {
    return <span key={key}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techArray}
      </div>
    </div>
  );
}

export default ProjectItem;
