import React, { useEffect, useState } from "react";
import { projectData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";
function Projects() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let newProjects;
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      newProjects = projectData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);
  const handleClick = (event, index) => {
    setItem({ name: event.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <>
      <div className="project_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(event) => {
                handleClick(event, index);
              }}
              className={`${
                active === index ? "active-project" : ""
              } project_item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="project_container container">
        {projects.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default Projects;
