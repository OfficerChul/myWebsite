import React, { Component } from "react";
import logo from "./logo.png";

class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <a href="#" className="logo">
          <img src={logo}></img>
        </a>
        <h1 className="Kyochul">Kyochul Jang's Website</h1>
      </div>
    );
  }
}
export default MainPage;
