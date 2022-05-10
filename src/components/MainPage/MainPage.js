import React, { Component } from "react";
import "./MainPage.css";
import logo from "./logo.png";

class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="stay-tuned">
          This website will continue to be updated.
        </div>
        <a href="/" className="logo">
          <img src={logo} className="logo-img" alt=""></img>
        </a>
      </div>
    );
  }
}
export default MainPage;
