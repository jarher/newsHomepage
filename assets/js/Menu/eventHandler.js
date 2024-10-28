const eventHandler = {
  listener: (elementsToAttachEvent, DOMHandler) => {
    const newEventListener = new EventListener(
      elementsToAttachEvent,
      DOMHandler
    );
    newEventListener.listen();
  },
};

class EventListener {
  constructor(elementsToAttachEvent, DOMHandler) {
    this.elementsToAttachEvent = elementsToAttachEvent;
    this.DOMHandler = DOMHandler;
  }

  listen() {
    if (this.elementsToAttachEvent.hasOwnProperty("clickEvent")) {
      const { elementsGroup } = this.elementsToAttachEvent.clickEvent;

      elementsGroup.forEach((elementParams) => {
        const { selector, method } = elementParams;
        const DOMElement = this.DOMHandler.getElement(selector);
        DOMElement.addEventListener("click", () => method());
      }, this);
    }
  }
}
export default eventHandler;
