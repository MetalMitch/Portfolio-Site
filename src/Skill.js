import React from "react";
import "./Skill.css";

function Skill({ Icon, title, para, skillIntro, skillArray }) {
  return (
    <div className="skill">
      <Icon className="skill__icon" />
      <h3 className="skill__title">{title}</h3>
      <p className="skill__para">{para}</p>
      <p className="skill__intro">{skillIntro}</p>
      <ul className="skill__list">
        {skillArray.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
