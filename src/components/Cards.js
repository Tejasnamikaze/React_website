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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"

              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Udaan "
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Udaan "
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Udaan "
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Udaan "
              path="/products"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua"
              label="Udaan "
              path="/sign-up"
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
