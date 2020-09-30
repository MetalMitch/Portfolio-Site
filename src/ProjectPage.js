import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectPage.css";
function ProjectPage({
  projectName,
  projectLink,
  projectDescription,
  projectImg,
  projectGithub,
}) {
  if (projectGithub) {
    return (
      <div className="projectPage">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img
            className="projectPage__img"
            src={projectImg}
            alt={projectName}
          />
        </a>
        <h1>{projectName}</h1>
        <h2>
          <a href={projectGithub}>
            <GitHubIcon />
          </a>{" "}
        </h2>
        <h4>
          Available{" "}
          <a
            class="projectPage__here"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          (link opens in new tab/window)
        </h4>
        <p>{projectDescription}</p>
      </div>
    );
  } else {
    return (
      <div className="projectPage">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img
            className="projectPage__img"
            src={projectImg}
            alt={projectName}
          />
        </a>
        <h1>{projectName}</h1>
        <h4>
          Available{" "}
          <a
            class="projectPage__here"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          (link opens in new tab/window)
        </h4>
        <p>{projectDescription}</p>
      </div>
    );
  }
}

export default ProjectPage;
