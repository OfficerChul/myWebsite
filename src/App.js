import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Modal from "react-modal";
import Mailer from "./components/Mailer";
import SearchPage from "./components/SearchPage/Search";
import backgroundVideo from "./images/background_video.mp4";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <div className='video'>
        <video autoPlay loop muted>
          <source src={backgroundVideo} type='video/mp4' />
        </video>
      </div>
      <SearchPage />
      {/* <MainPage />
      <Navbar />

      <Cards />
      <Footer />
      <Mailer /> */}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <MainPage />
//       <Navbar />
//       <Cards />
//       <Footer />
//       <Mailer />
//     </div>
//   );
// }

export default App;
