import React from "react";
import Slotm from "./Slotm";
import "./index.css";

const App = () => {
  return (
    <>
      <h1 className="heading_style"> 🎰 Welcome to <span style={{ fontWeight: 'bold' }}>JumanJi Slot Machine</span> 🎰 </h1>
      <div className="slotmachine">
        <Slotm x="😊" y="😊" z="😊" />
        <hr />
        <Slotm x="🥺" y="😂" z="🍎" />
        <hr />
        <Slotm x="😂" y="🍎" z="😊" />
        <hr />
        <Slotm x="😊" y="🍎" z="🥺" />
        <hr />

      </div>
    </>
  )

};
export default App;