class DOMHandler {
  static getElement(selector) {
    return document.querySelector(selector);
  }

  static toggleClass(element, className) {
    element.classList.toggle(className);
  }

  static genericTimer(callback, delay) {
    let intervalId = setTimeout(() => {
      callback();
      clearTimeout(intervalId);
    }, delay);
  }

  static switcher({
    firstToggler,
    secondToggler,
    thirdToggler,
    firstDelay,
    secondDelay,
  }) {
    firstToggler();
    this.genericTimer(secondToggler, firstDelay);
    this.genericTimer(thirdToggler, secondDelay);
  }

  static switchIn(props) {
    const switcherProps = {
      firstToggler: () => this.toggleClass(props.container, props.hideClass),
      secondToggler: () =>
        this.toggleClass(props.container, props.opacityClass),
      thirdToggler: () =>
        this.toggleClass(props.elementToTransform, props.transformClass),
      firstDelay: props.switchInContainerDelay,
      secondDelay: props.elementToTransformDelay,
    };
    this.switcher(switcherProps);
  }

  static switchOut(props) {
    const switcherProps = {
      firstToggler: () =>
        this.toggleClass(props.elementToTransform, props.transformClass),
      secondToggler: () =>
        this.toggleClass(props.container, props.opacityClass),
      thirdToggler: () => this.toggleClass(props.container, props.hideClass),
      firstDelay: props.elementToTransformDelay,
      secondDelay: props.switchOutContainerDelay,
    };
    this.switcher(switcherProps);
  }
}

export default DOMHandler;
