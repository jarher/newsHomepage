import DOMHandler from "./Menu/DOMHandler.js";
import eventHandler from "./Menu/eventHandler.js";

const functionProps = {
  container: document.querySelector(".main-nav"),
  elementToTransform: document.querySelector(".menu-container"),
  hideClass: "main-nav-hidden",
  transformClass: "menu-container--collapse",
  opacityClass: "opacity",
  switchInContainerDelay: 200,
  switchOutContainerDelay: 1000,
  elementToTransformDelay: 500,
};

const elementsToAttachEvent = {
  clickEvent: {
    elementsGroup: [
      {
        selector: ".open-button",
        method() {
          DOMHandler.switchIn(functionProps);
        },
      },
      {
        selector: ".close-button",
        method() {
          DOMHandler.switchOut(functionProps);
        },
      },
    ],
  },
};

//click event listener
eventHandler.listener(elementsToAttachEvent, DOMHandler);
