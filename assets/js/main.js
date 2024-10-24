import eventHandler from "./eventHandler.js";
import { switchIn, switchOut } from "./eventMethods.js";

const main_nav = document.querySelector(".main-nav");
const menu_container = document.querySelector(".menu-container");
const open_button = document.querySelector(".open-button");
const close_button = document.querySelector(".close-button");

const functionProps = {
  firstElement: main_nav,
  secondElement: menu_container,
  firstClassName: "main-nav-hidden",
  secondClassName: "menu-container--collapse",
};

//click event listener
[
  [open_button, switchIn, functionProps],
  [close_button, switchOut, functionProps],
].forEach((array) => eventHandler.clickListener(array));
