import React from "react";
import "./styles.css";
import { useState } from "react";

const categories = {
  Attackers: [
    { name: " Lionel Messi", rating: "5/5", position: "RWF" },
    { name: "Cristiano Ronaldo", rating: "4.9/5", position: "ST" },
    { name: "Neymar Jr.", rating: "4.5/5", position: "LWF" }
  ],

  Midfield: [
    { name: "Andres Iniesta", rating: "5/5", position: "CMF" },
    { name: "Xavi Hernandez", rating: "5/5", position: "CMF" },
    { name: "Ronaldinho Gucho", rating: "4.8/5", position: "AMF" }
  ],
  Defence: [
    { name: "Paolo Maldini", rating: "5/5", position: "LB" },
    { name: "Sergio Ramos", rating: "4.8/5", position: "CB" },
    { name: "Carles Puyol", rating: "4.5/5", position: "CB" },
    { name: "Dani Alves", rating: "4.5/5", position: "RB" }
  ],

  GoalKeeper: [{ name: "Manuel Neuer", rating: "4.8/5", position: "GK" }]
};

export default function App() {
  const [activeCategory, setActive] = useState("Attackers");
  function categoryClickHandler(category) {
    setActive(category);
  }
  return (
    <div className="App">
      <h1>My Football Rating</h1>
      <p>This is my All Time XI</p>
      <div>
        {Object.keys(categories).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#F87171",
              borderRadius: "0.25rem",
              padding: "0.5rem  1rem",
              border: "1px solid #F87171",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {categories[activeCategory].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #F87171",
                width: "50%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <p style={{ fontSize: "larger", display: "inline" }}>
                {" "}
                {item.name} ({item.position}){" "}
              </p>
              <p style={{ fontSize: "smaller" }}> {item.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
