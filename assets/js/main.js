import runModalEvent from "./Menu/eventHandler.js";

const functionProps = {
  containerSelector: ".main-nav",
  elementToTransformSelector: ".menu-container",
  hideClass: "main-nav-hidden",
  transformClass: "menu-container--collapse",
  opacityClass: "opacity",
  switchInContainerDelay: 200,
  switchOutContainerDelay: 1000,
  elementToTransformDelay: 500,
};

runModalEvent(functionProps);
