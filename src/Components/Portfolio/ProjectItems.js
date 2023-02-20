import React from "react";
import { FaDatabase, FaEye, FaGithub, FaReact } from "react-icons/fa";

function ProjectItems({ item }) {
  return (
    <div className="project_card" key={item?.id}>
      <img
        src={item?.image}
        alt={item?.title + "image"}
        className="project_image"
      />
      <h3 className="project_title">{item?.title}</h3>
      <p className="project_description">{item.description}</p>
      <div className="project_button_div">
        <a
          href={item?.demo}
          className="project_button"
          target="_blank"
          rel="noreferrer"
        >
          Demo{" "}
          <FaEye
            className="project_button_icon"
            style={{ display: "inline" }}
          />
        </a>
        <a
          href={item?.frontEnd}
          className="project_button"
          target="_blank"
          rel="noreferrer"
        >
          {item.backEnd ? "FrontEnd" : "Source Code"}
          {item.backEnd ? (
            <FaReact
              className="project_button_icon"
              style={{ display: "inline" }}
            />
          ) : (
            <FaGithub
              className="project_button_icon"
              style={{ display: "inline" }}
            />
          )}
        </a>
        <a
          href={item?.backEnd}
          className={
            item.backEnd ? "project_button " : "project_button notAvail"
          }
          target="_blank"
          rel="noreferrer"
        >
          BackEnd{" "}
          <FaDatabase
            className="project_button_icon"
            style={{ display: "inline" }}
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectItems;
