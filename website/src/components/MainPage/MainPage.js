import React, { Component } from "react";
import "./MainPage.css";
import logo from "./logo.png";

class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <a href="#" className="logo">
          <img src={logo}></img>
        </a>
        <div className="Kyochul">
          <h1>Kyochul Jang's Website</h1>
        </div>
      </div>
    );
  }
}
export default MainPage;
