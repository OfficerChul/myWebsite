import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/website_project.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="HTML, CSS, React.js"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
