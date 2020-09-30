import React from "react";
import "./ProjectListPage.css";
import Project from "./Project.js";
import YouTubeClone from "./assets/youtube-clone.jpg";
import NetflixClone from "./assets/netflix-clone.jpg";
import Flex from "./assets/flexbydesign.jpg";

import { Link } from "react-router-dom";

function ProjectListPage({ projects }) {
  return (
    <div className="projectPage">
      <div className="projectPage__text">
        <h2>Projects</h2>
        <p>Here are a range of projects I have been working on.</p>
        <p>
          To take a look, please click on the card to be taken to the project
        </p>
      </div>
      <div className="projectPage__projects">
        <Link to="/projects/YouTube-Clone">
          <Project
            projectName={projects.YouTube.projectName}
            projectLink={projects.YouTube.projectLink}
            projectDescriptionSml={projects.YouTube.projectDescriptionSml}
            projectImg={YouTubeClone}
            projectGithub={projects.YouTube.projectGithub}
          />
        </Link>
        <Link to="/projects/Netflix-Clone">
          <Project
            projectName={projects.Netflix.projectName}
            projectLink={projects.Netflix.projectLink}
            projectDescriptionSml={projects.Netflix.projectDescriptionSml}
            projectImg={NetflixClone}
            projectGithub={projects.Netflix.projectGithub}
          />
        </Link>
        <Link to="/projects/FlexByDesign">
          <Project
            projectName={projects.FlexByDesign.projectName}
            projectLink={projects.FlexByDesign.projectLink}
            projectDescriptionSml={projects.FlexByDesign.projectDescriptionSml}
            projectImg={Flex}
            // projectGithub={projects.FlexByDesign.projectGithub}
          />
        </Link>
        {/* <Project projectName="" projectLink="" projectDescription="" /> */}
      </div>
    </div>
  );
}

export default ProjectListPage;
