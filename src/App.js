import React from "react";
import Header from "./layout/Header";

import "./App.css";
import SideBar from "./layout/SideBar";
import Recipes from "./components/Recipes";

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
];

function App() {
  return (
    <>
      <Header />
      <Recipes />
    </>
  );
}

export default App;
