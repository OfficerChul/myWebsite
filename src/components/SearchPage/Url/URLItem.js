import React, { Component } from 'react'
import googleLogo from "../google.png";
import "./URLItem.css";

export default class URLItem extends Component {
  render() {
    return (
        <div className='main'>
            <div className="URL-container">
                <img src={googleLogo} alt="URL-icon" className='URLIcon'></img>
                <h3 className='URL-name'>Google</h3>
            </div>
        </div>
        

    )
  }
}
