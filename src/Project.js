import React from "react";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project({
  projectName,
  projectLink,
  projectDescriptionSml,
  projectImg,
  projectGithub,
}) {
  if (projectGithub) {
    return (
      <div className="project">
        <div className="project__img">
          <img src={projectImg} alt="" />
        </div>
        <div className="project__description">
          <h5 className="description__h5">{projectName}</h5>
          <p className="description__p">{projectDescriptionSml}</p>
        </div>
        <div className="project__github">
          <GitHubIcon className="github__icon" /> Available
        </div>
      </div>
    );
  } else {
    return (
      <div className="project">
        <div className="project__img">
          <img src={projectImg} alt="" />
        </div>
        <div className="project__description">
          <h5 className="description__h5">{projectName}</h5>
          <p className="description__p">{projectDescriptionSml}</p>
        </div>
      </div>
    );
  }
}

export default Project;
