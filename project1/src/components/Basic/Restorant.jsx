import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./Menu";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currVal) => {
      return currVal.category;
    })
  ),
  "All",
];

const Restorant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currVal) => {
      return currVal.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restorant;
