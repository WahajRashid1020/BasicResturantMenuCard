import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuApi";
import CardMenu from "./CardMenu";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const mycat = [
  ...new Set(
    Menu.map((c) => {
      return c.category;
    })
  ),
  "All",
];
console.log("first", mycat);

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  console.log("That is the list ", menuList);
  const filterItem = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((current) => {
      return current.category === category;
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <CardMenu menuData={menuData} />
    </>
  );
};

export default Resturant;
