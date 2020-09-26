import React from "react";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project({
  projectName,
  projectLink,
  projectDescription,
  projectImg,
  projectGithub,
}) {
  return (
    <div className="project">
      <a href={projectLink}>
        <div className="project__img">
          <img src={projectImg} alt="" />
        </div>
      </a>
      <div className="project__description">
        <h5 className="description__h5">{projectName}</h5>
        <p className="description__p">{projectDescription}</p>
      </div>
      <a href={projectGithub}>
        <div className="project__github">
          <GitHubIcon className="github__icon" />
        </div>
      </a>
    </div>
  );
}

export default Project;
