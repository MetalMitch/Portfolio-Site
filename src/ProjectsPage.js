import React from "react";
import "./ProjectsPage.css";
import Project from "./Project.js";
import YouTubeClone from "./assets/youtube-clone.jpg";
import NetflixClone from "./assets/netflix-clone.jpg";

const YouTubeDesc =
  "I followed a tutorial on React projects, one of which was YouTube. \n In this project I learned about react-router-dom and how to make multiple page React sites. \n My Additional work will be to add a page to view those videos on";

const NetflixDesc =
  "I followed my first tutorial on React with this project. \n With this i was fundamentally introduced to BEM naming conventions and using APIs in React.";

function ProjectsPage() {
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
        <Project
          projectName="YouTube Clone"
          projectLink="https://clone-5127f.web.app/"
          projectDescription={YouTubeDesc}
          projectImg={YouTubeClone}
          projectGithub="https://github.com/MetalMitch/youtube-clone"
        />
        <Project
          projectName="Netflix Clone"
          projectLink="https://netflix-clone-6261c.web.app/"
          projectDescription={NetflixDesc}
          projectImg={NetflixClone}
          projectGithub="https://github.com/MetalMitch/netflix-clone"
        />
        {/* <Project projectName="" projectLink="" projectDescription="" /> */}
      </div>
    </div>
  );
}

export default ProjectsPage;
