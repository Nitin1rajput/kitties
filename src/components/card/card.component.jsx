import React from "react";
import "./card.style.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="kitty"
        src={`https://robohash.org/${props.kitty.id}/?set=set4&size=180x180`}
      />
      <h2>{props.kitty.name}</h2>
      <p>{props.kitty.email}</p>
    </div>
  );
};
