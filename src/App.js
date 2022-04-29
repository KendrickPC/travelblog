import React from "react";
import "./style.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Data from "./data.js";

export default function App() {
  const cards = Data.map(item => {
    return (
      <Card 
        key={item.location}
        item={item}
      />
    )
    
  })

  return (
    <div>
      <Nav />
      {cards}
    </div>
  )
}