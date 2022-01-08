import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1> My Projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                CardImage="website\src\image\website_project.png"
                Project_description="My Project"
                Skills="Java, React"
              ></CardItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
