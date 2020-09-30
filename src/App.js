import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import Description from "./Description.js";
import Intro from "./Intro.js";
import Skill from "./Skill.js";
import ProjectListPage from "./ProjectListPage.js";
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Preview from "./assets/preview.png";

import YouTubeClone from "./assets/youtube-clone.jpg";
import NetflixClone from "./assets/netflix-clone.jpg";
import Flex from "./assets/flexbydesign.jpg";

import ProjectPage from "./ProjectPage.js";

import { projects } from "./projectsOb.js";

const personal = [
  { name: "Good Communication" },
  { name: "Self Evaluation" },
  { name: "Team Participation" },
  { name: "Team Leading" },
  { name: "Solo Work" },
  { name: "Conflict Management" },
];

const developer = [
  { name: "HTML 5" },
  { name: "CSS" },
  { name: "PHP" },
  { name: "JavaScript" },
  { name: "ReactJS" },
];

const ambitions = [
  { name: "React Native" },
  { name: "iOS Development (Swift)" },
  { name: "Android Development (Java/Kotlin)" },
  { name: "Mobile Game Development (Unity)" },
  { name: "ReactJS" },
];

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Professional, Computing, Technology, Junior, Graduate, JavaScript, React, ReactJS, Experienced, Communication"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Preview} />
        <meta property="twitter:image" content={Preview} />
      </Helmet>
      <Router>
        <Nav />
        <Switch>
          <Route path="/projects/YouTube-Clone">
            <Helmet>
              <title>{`Mitchell Skee | ` + projects.YouTube.projectName}</title>
              <meta
                property="og:title"
                content={`Mitchell Skee | ` + projects.YouTube.projectName}
              />
              <meta
                property="twitter:title"
                content={`Mitchell Skee | ` + projects.YouTube.projectName}
              />
              <meta
                name="description"
                content={projects.YouTube.projectDescriptionSml}
              />
              <meta
                name="description"
                content={projects.YouTube.projectDescriptionSml}
              />
              <meta
                name="og:description"
                content={projects.YouTube.projectDescriptionSml}
              />
              <meta
                name="twitter:description"
                content={projects.YouTube.projectDescriptionSml}
              />
              <meta
                property="og:url"
                content="https://www.mskee.co.uk/projects/YouTube-Clone"
              />
              <meta
                property="twitter:url"
                content="https://www.mskee.co.uk/projects/YouTube-Clone"
              />
            </Helmet>
            <ProjectPage
              projectName={projects.YouTube.projectName}
              projectLink={projects.YouTube.projectLink}
              projectDescription={projects.YouTube.projectDescription}
              projectImg={YouTubeClone}
              projectGithub={projects.YouTube.projectGithub}
            />
          </Route>
          <Route path="/projects/Netflix-Clone">
            <Helmet>
              <title>{`Mitchell Skee | ` + projects.Netflix.projectName}</title>
              <meta
                property="og:title"
                content={`Mitchell Skee | ` + projects.Netflix.projectName}
              />
              <meta
                property="twitter:title"
                content={`Mitchell Skee | ` + projects.Netflix.projectName}
              />
              <meta
                name="description"
                content={projects.Netflix.projectDescriptionSml}
              />
              <meta
                name="og:description"
                content={projects.Netflix.projectDescriptionSml}
              />
              <meta
                name="twitter:description"
                content={projects.Netflix.projectDescriptionSml}
              />
              <meta
                property="og:url"
                content="https://www.mskee.co.uk/projects/Netflix-Clone"
              />
              <meta
                property="twitter:url"
                content="https://www.mskee.co.uk/projects/Netflix-Clone"
              />
            </Helmet>
            <ProjectPage
              projectName={projects.Netflix.projectName}
              projectLink={projects.Netflix.projectLink}
              projectDescription={projects.Netflix.projectDescription}
              projectImg={NetflixClone}
              projectGithub={projects.Netflix.projectGithub}
            />
          </Route>
          <Route path="/projects/FlexByDesign">
            <Helmet>
              <title>
                {`Mitchell Skee | ` + projects.FlexByDesign.projectName}
              </title>
              <meta
                property="og:title"
                content={`Mitchell Skee | ` + projects.FlexByDesign.projectName}
              />
              <meta
                property="twitter:title"
                content={`Mitchell Skee | ` + projects.FlexByDesign.projectName}
              />
              <meta
                name="og:description"
                content={projects.FlexByDesign.projectDescriptionSml}
              />
              <meta
                name="twitter:description"
                content={projects.FlexByDesign.projectDescriptionSml}
              />
              <meta
                name="description"
                content={projects.FlexByDesign.projectDescriptionSml}
              />
              <meta
                property="og:url"
                content="https://www.mskee.co.uk/projects/FlexByDesign"
              />
              <meta
                property="twitter:url"
                content="https://www.mskee.co.uk/projects/FlexByDesign"
              />
            </Helmet>
            <ProjectPage
              projectName={projects.FlexByDesign.projectName}
              projectLink={projects.FlexByDesign.projectLink}
              projectDescription={projects.FlexByDesign.projectDescription}
              projectImg={Flex}
              projectGithub={projects.FlexByDesign.projectGithub}
            />
          </Route>
          <Route path="/projects/">
            <Helmet>
              <title>Mitchell Skee | Projects</title>
              <meta property="og:title" content="Mitchell Skee | Projects" />
              <meta
                property="twitter:title"
                content="Mitchell Skee | Projects"
              />
              <meta
                name="description"
                content="A list of Mitchell Skee's projects, both professional and personal, all with the aim to improve knowledge and skill-base."
              />
              <meta
                name="og:description"
                content="A list of Mitchell Skee's projects, both professional and personal, all with the aim to improve knowledge and skill-base."
              />
              <meta
                name="twitter:description"
                content="A list of Mitchell Skee's projects, both professional and personal, all with the aim to improve knowledge and skill-base."
              />
              <meta
                property="og:url"
                content="https://www.mskee.co.uk/projects/"
              />
              <meta
                property="twitter:url"
                content="https://www.mskee.co.uk/projects/"
              />
            </Helmet>
            <div className="app__page">
              <ProjectListPage projects={projects} />
            </div>
          </Route>
          <Route path="/">
            <Helmet>
              <title>Mitchell Skee | Web Developer</title>
              <meta
                property="og:title"
                content="Mitchell Skee | Web Developer"
              />
              <meta
                property="twitter:title"
                content="Mitchell Skee | Web Developer"
              />
              <meta
                name="description"
                content="A professional, mature, versatile, individual and team player, with Proven ability to lead, participate, be challenged and deliver results."
              />
              <meta
                name="twitter:description"
                content="A professional, mature, versatile, individual and team player, with Proven ability to lead, participate, be challenged and deliver results."
              />
              <meta
                property="og:description"
                content="A professional, mature, versatile, individual and team player, with Proven ability to lead, participate, be challenged and deliver results."
              />
              <meta property="og:url" content="https://www.mskee.co.uk/" />
              <meta property="twitter:url" content="https://www.mskee.co.uk/" />
            </Helmet>
            <div className="app__page">
              <Description />
              <Intro />
              <div className="skills">
                <Skill
                  Icon={PersonIcon}
                  title="Personal"
                  para="I’m a hard working individual, committed to the challenge in front of me."
                  skillIntro="My work experience leaves me with the following skills:"
                  skillArray={personal}
                />
                <Skill
                  Icon={CodeIcon}
                  title="Developer"
                  para="I love the feeling of a project that is nearing completion, where all of the hard work is becoming a tangible end-product."
                  skillIntro="Technologies I have worked with are:"
                  skillArray={developer}
                />
                <Skill
                  Icon={WatchLaterIcon}
                  title="Ambitions"
                  para="I am always looking to improve my skills and gain knowledge of new technologies"
                  skillIntro="Future tech I am interested in working with are:"
                  skillArray={ambitions}
                />
              </div>
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
