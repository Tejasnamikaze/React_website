import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src=""

              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="FARMHOUSE PIZZA"
              path="/services"
            />
            <CardItem
              src=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="VEG EXTRAVAGANZA"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Pepper barbecue"
              path="/services"
            />
            <CardItem
              src=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Cheese Dominator"
              path="/products"
            />
            <CardItem
              src=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="4 cheese pizza"
              path="/sign-up"
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
