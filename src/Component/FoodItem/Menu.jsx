import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    const { image, food, price, description} = this.props;
    return (
      /* <!-- food item start --> */
      <div className="single-food">
        <div className="img">
          <img src={image} alt="Food Image" />
        </div>
        <div className="title-price">
                <h3>{food}</h3>
          <p>${price}</p>
        </div>
        <div className="food-desc">
          <p>{description.substring(0, 250)}...</p>
        </div>
      </div>
    );
  }
}
export default Menu;
