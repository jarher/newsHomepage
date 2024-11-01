import { DOM } from "./DOMHandler.js";
import { switchIn, switchOut } from "./utils.js";

class EventListener {
  constructor(functionProps) {
    this.functionProps = functionProps;
  }

  handleModalClick = (dataValue) => {
    if (dataValue === "open-modal") {
      return switchIn(this.functionProps, DOM);
    }
    if (dataValue === "close-modal") {
      return switchOut(this.functionProps, DOM);
    }
  };

  listen() {
    document.addEventListener("click", (e) => {
      const dataValue = e.target.dataset.name;
      this.handleModalClick(dataValue);
    });
  }
}

const runModalEvent = (functionProps) =>
  new EventListener(functionProps).listen();

export default runModalEvent;
