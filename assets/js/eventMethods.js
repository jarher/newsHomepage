function getDOMELement(selector) {
  return document.querySelector(selector);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function destructuring(params) {
  const { switchDelays, ...rest } = params;
  const {
    switchInContainerDelay,
    switchOutContainerDelay,
    elementToTransformDelay,
  } = switchDelays;
  const {
    container,
    elementToTransform,
    hideClass,
    opacityClass,
    transformClass,
  } = rest;
  return {
    container,
    elementToTransform,
    hideClass,
    opacityClass,
    transformClass,
    switchInContainerDelay,
    switchOutContainerDelay,
    elementToTransformDelay,
  };
}

class newEvent {
  constructor(functionProps, elementsToAttachEvent) {
    this.props = destructuring(functionProps);
    this.elementsToAttachEvent = elementsToAttachEvent;
    this.runEvent();
  }

  switchIn(props) {
    toggleClass(props.container, props.hideClass);
    let fadeInterval = setTimeout(() => {
      toggleClass(props.container, props.opacityClass),
        clearTimeout(fadeInterval);
    }, props.switchInContainerDelay);
    let classInterval = setTimeout(() => {
      toggleClass(props.elementToTransform, props.transformClass),
        clearTimeout(classInterval);
    }, props.elementToTransformDelay);
  }

  switchOut(props) {
    toggleClass(props.elementToTransform, props.transformClass);
    let fadeInterval = setTimeout(() => {
      toggleClass(props.container, props.opacityClass),
        clearInterval(fadeInterval);
    }, props.elementToTransformDelay);
    let classInterval = setTimeout(() => {
      toggleClass(props.container, props.hideClass),
        clearTimeout(classInterval);
    }, props.switchOutContainerDelay);
  }

  runEvent() {
    if (this.elementsToAttachEvent.hasOwnProperty("clickEvent")) {
      const { elementsGroup } = this.elementsToAttachEvent.clickEvent;

      elementsGroup.forEach((elementParams) => {
        const { selector, eventFunction } = elementParams;
        const DOMElement = getDOMELement(selector);
        let functionEvent;

        if (eventFunction === "open") {
          functionEvent = this.switchIn;
        }
        if (eventFunction === "close") {
          functionEvent = this.switchOut;
        }
        DOMElement.addEventListener("click", () => functionEvent(this.props));
      });
    }
  }
}

export { newEvent };
