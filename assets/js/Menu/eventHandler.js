const eventHandler = {
  listener: (elementsToAttachEvent, DOMHandler) =>
    new EventListener(elementsToAttachEvent, DOMHandler),
};

class EventListener {
  constructor(elementsToAttachEvent, DOMHandler) {
    this.elementsToAttachEvent = elementsToAttachEvent;
    this.DOMHandler = DOMHandler;
    this.listen();
  }

  listen() {
    if (this.elementsToAttachEvent.hasOwnProperty("clickEvent")) {
      const { elementsGroup } = this.elementsToAttachEvent.clickEvent;

      elementsGroup.forEach((elementParams) => {
        const { selector, method } = elementParams;
        const DOMElement = this.DOMHandler.getElement(selector);
        DOMElement.addEventListener("click", () => method());
      });
    }
  }
}
export default eventHandler;
