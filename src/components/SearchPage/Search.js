import React, { Component } from 'react'
import "./Search.css"
import logo from "../MainPage/logo.png";
import googleLogo from "./google.png";
import magnifier from "./search.png";

export default class Search extends Component {
  render() {
    return (
      <div className='Search'>
        <section>
            <div className='main'>
                <img src = {logo} alt='logo' className='logo'></img>
                <div className='searchBox'>
                    <input className='query' type="search" autocomplete="off" spellcheck="false" 
                    placeholder="Feel free to search -- Kyochul Jang" aria-live="polite"></input>
                    <div className='icons'>
                        <div><img src ={googleLogo} alt='googleLogo' className='googleLogo'></img></div>
                        <div><button className='magButton'><img src = {magnifier} alt='magnifier'></img></button></div>
                    </div>
                </div>
                {/* <img src = {googleLogo} alt='googleLogo'></img> */}
                
                
            </div>
        </section>
      </div>
    )
  }
}
