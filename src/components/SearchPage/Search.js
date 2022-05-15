import React, { Component } from 'react'
import "./Search.css"
import logo from "../MainPage/logo_blue.png";
import googleLogo from "./google.png";
import magnifier from "./search.png";

export default class Search extends Component {
  render() {
    return (
      <div className='Search'>
        <section>
            <div className='main'>
              <a href = '/'><img src = {logo} alt='logo' className='logo'></img></a>
                <div className='searchBox'>
                    <input className='query' type="search" autocomplete="off" spellcheck="false" 
                    placeholder="Google Search" aria-live="polite"></input>
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
