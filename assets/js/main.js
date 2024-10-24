import eventHandler from "./eventHandler.js";
import { switchIn, switchOut } from "./eventMethods.js";

const main_nav = document.querySelector(".main-nav");
const menu_container = document.querySelector(".menu-container");
const open_button = document.querySelector(".open-button");
const close_button = document.querySelector(".close-button");

const functionProps = {
  container: main_nav,
  elementToTransform: menu_container,
  hideClass: "main-nav-hidden",
  transformClass: "menu-container--collapse",
  opacityClass: "opacity",
  switchDelays: {
    switchInContainerDelay: 200,
    switchOutContainerDelay: 1000,
    elementToTransformDelay: 500,
  },
};

//click event listener
[
  [open_button, switchIn],
  [close_button, switchOut],
].forEach((array) => eventHandler.clickListener(array, functionProps));
