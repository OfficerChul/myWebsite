import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__pic-wrap" data-category={props.Skills}>
          <img
            src={props.CardIamge}
            alt="Project_Image"
            className="cards__item__img"
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.Project_description}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
