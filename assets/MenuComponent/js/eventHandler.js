import { DOM } from "./DOMHandler.js";
import { includeNavToHeader } from "./menuTemplate.js";
import { genericTimer, switchIn, switchOut } from "./utils.js";

class EventListener {
  constructor(functionProps) {
    this.functionProps = {
      hideClass: "hidden",
      transformClass: "menu-collapse",
      opacityClass: "opacity",
      ...functionProps,
    };
    this.menuList = functionProps.menuList;
  }

  handleModalClick(dataValue) {
    if (dataValue.dataset.name === "open-modal") {
      return switchIn(this.functionProps, DOM);
    }
    if (dataValue.dataset.name === "close-modal") {
      return switchOut(this.functionProps, DOM);
    }
    if (dataValue.href) {
      switchOut(this.functionProps, DOM);
      genericTimer([() => (window.location.href = dataValue.href), 1000]);
    }
  }

  listen() {
    document.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        const dataValue = e.target;
        this.handleModalClick(dataValue);
      },
      true
    );

    document.addEventListener("DOMContentLoaded", () => {
      includeNavToHeader(this.menuList, DOM);
    });
  }
}

const runModalEvent = (functionProps) =>
  new EventListener(functionProps).listen();

export default runModalEvent;
