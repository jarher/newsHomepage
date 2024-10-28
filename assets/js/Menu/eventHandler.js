import { EventListener } from "./eventListener.js";

const eventHandler = {
  listener: (elementsToAttachEvent, DOMHandler) =>
    new EventListener(elementsToAttachEvent, DOMHandler),
};

export default eventHandler;
