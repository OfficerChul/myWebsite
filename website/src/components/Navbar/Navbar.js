import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";
import logo from "./logo.png";

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "hi" : "go away"}></i>
        </div>

        <div className="logo">
          <a href="#">
            <img src={logo}></img>{" "}
          </a>
        </div>

        <div className="below-logo">
          <h1 className="Kyochul">Kyochul Jang's Website</h1>

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
