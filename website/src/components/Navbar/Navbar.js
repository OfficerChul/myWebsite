import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";

import test from "./test.jpg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <div className="below-logo">
          <ul className="menu-titles">
            {MenuItems.map((item, index) => {
              return (
                <li className={item.cName}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
