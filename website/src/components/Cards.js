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
              url="https://github.com/OfficerChul/myWebsite"
            />
            <CardItem
              src="images/social_network_profile_project.jpg"
              body="Network application which can show yourself to others."
              title="Social Network Profile Project"
              skills="Java"
              url="https://github.com/OfficerChul/project-05"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
