import React, { Component } from "react";
import "./MainPage.css";
import logo from "./logo.png";
import smallLogo from "./small-logo.png";

class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <a href="#" className="logo">
          <img src={logo} className="logo-img"></img>
        </a>
      </div>
    );
  }
}
export default MainPage;
