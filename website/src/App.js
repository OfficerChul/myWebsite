import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <MainPage />
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
