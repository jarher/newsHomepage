import { newEvent } from "./eventMethods.js";

const eventHandler = {
  eventListener: (functionProps, elementsToAttachEvent) =>
    new newEvent(functionProps, elementsToAttachEvent),
};

export default eventHandler;
