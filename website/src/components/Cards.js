import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/website_project.jpg"
              body="The websites you are viewing now is created by me."
              title="Website Project"
              skills="HTML, CSS, React.js"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
