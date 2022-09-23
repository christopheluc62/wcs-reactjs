import React from "react";

function Skill(props) {
  return (
    <li>
      {props.name}
      <span className="votes">{props.upvotes}</span>
    </li>
  );
}

export default Skill;
