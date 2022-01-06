import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Navbar />
    </div>
  );
}

export default App;
