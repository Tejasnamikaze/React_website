import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these wide range of SCRUMPTIOUS DISHES..</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi23Ug8hUqAjIQSCpAITPZPmnsubBcKLHlqg&usqp=CAU"

              text="Delightful combination of onion and mushroom"
              label="FARMHOUSE PIZZA"
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlmKIFVPJmKmT-JAOl7OsLvsIq4Ffgweu_g&usqp=CAU"
              text="Black olives,capsicum available in cheese burst"
              label="VEG EXTRAVAGANZA"
              path="/services"
            />
          </ul>
          
          <ul className="cards__items">
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyzvtHSA_ElPh7iW0vHcK8Mv9CrcSrGumpA&usqp=CAU"
              text="Pepper barbecue chicken for that extra zing"
              label="Pepper barbecue"
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlmKIFVPJmKmT-JAOl7OsLvsIq4Ffgweu_g&usqp=CAU"
              text="Loaded with a pound of mozarella"
              label="Cheese Dominator"
              path="/products"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1IcBEX1kHX8_EquW2QXIbg0JCnx5GPVxrw&usqp=CAU"
              text="Cheese overloaded with 4 different varieties of cheese"
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
