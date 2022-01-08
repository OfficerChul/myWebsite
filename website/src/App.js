import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Cards />
    </div>
  );
}

export default App;
