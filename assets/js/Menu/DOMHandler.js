class DOMHandler {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  toggleClass(className) {
    this.element.classList.toggle(className);
    return this;
  }
}

const DOM = (selector) =>
  (function (selector) {
    return new DOMHandler(selector);
  })(selector);

export { DOM };
