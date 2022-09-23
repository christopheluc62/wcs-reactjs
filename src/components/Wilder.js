import React from "react";
import blank_profile from "./../assets/blank_profile.png";
import Skill from "./Skill";

function Wilder(props) {
  return (
    <article className="card">
      <img src={blank_profile} alt={`${props.name} Profile`} />
      <h3>{props.name}</h3>
      {/* <h5>{props.city}</h5> */}
      <p>Lorem ipsum</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {props.upvotes.map((upvote) => {
          return (
            <Skill
              key={upvote.id}
              name={upvote.skill.name}
              upvotes={upvote.upvote}
            />
          );
        })}
      </ul>
    </article>
  );
}

export default Wilder;
