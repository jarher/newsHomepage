import runModalEvent from "./js/eventHandler.js";

const functionProps = {
  switchInContainerDelay: 200,
  switchOutContainerDelay: 1000,
  elementToTransformDelay: 500,
  menuList: [
    `<li><a href="./index.html">Home</a></li>`,
    `<li><a href="./index.html">New</a></li>`,
    `<li><a href="./index.html">Popular</a></li>`,
    `<li><a href="./index.html">Trending</a></li>`,
    `<li><a href="./index.html">Categories</a></li>`,
  ],
};

runModalEvent(functionProps);
