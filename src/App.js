import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import Description from "./Description.js";
import Intro from "./Intro.js";
import Skill from "./Skill.js";
import ProjectsPage from "./ProjectsPage";

import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <Nav />
        <Switch>
          <Route path="/projects/">
            <div className="app__page">
              <ProjectsPage />
            </div>
          </Route>
          <Route path="/">
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
