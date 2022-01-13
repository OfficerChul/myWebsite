import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <CardItem
            src="images/website_project.jpg"
            body="The websites you are viewing now is created by me. I also made my css. This website will continue to be updated. Stay tuned!"
            title="Website Project"
            skills="HTML, CSS, React.js"
            url="https://github.com/OfficerChul/myWebsite"
            className="cards__items"
          />
          <CardItem
            src="images/social_network_profile_project.jpg"
            body="Network application which can show yourself to others. You can upload your bio, email address, and interests and show them to others."
            title="Online Networking Platform"
            skills="Java"
            url="https://github.com/OfficerChul/project-05"
            className="cards__items"
          />
          <CardItem
            src="images/UPS_predictive_model_project.png"
            body="Create and develop a predictive model to identify proposal portfolio company for private equity firms which partner with UPS."
            title="UPS PRIVATE EQUITY ANALYSIS & MODELING"
            skills="Python, Scikit-learn, PowerBI"
            url=""
            className="cards__items"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
