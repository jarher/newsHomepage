import eventHandler from "./eventHandler.js";

const main_nav = document.querySelector(".main-nav");
const menu_container = document.querySelector(".menu-container");

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

const elementsToAttachEvent = {
  clickEvent: {
    elementsGroup: [
      {
        selector: ".open-button",
        eventFunction: "open",
      },
      {
        selector: ".close-button",
        eventFunction: "close",
      },
    ],
  },
};

//click event listener
eventHandler.eventListener(functionProps, elementsToAttachEvent);
