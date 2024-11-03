import { catchErrors } from "./errorHandler.js";

class DOMHandler {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  create(elementName) {
    catchErrors(() => {
      if (!elementName || typeof elementName !== "string")
        throw new Error("element type is required");
    });
    if (!this.element) {
      const validator = (value) => {
        if (/^[a-z]$/.test(value)) {
          throw new Error("invalid element type");
        }
      };
      catchErrors(() => validator(elementName));
      this.element = document.createElement(elementName);
    }
    return this;
  }

  toggleClass(className) {
    catchErrors(() => {
      if (typeof className !== "string") throw new Error("string is required");
    });
    this.element.classList.toggle(className);
    return this;
  }

  addClass(className) {
    catchErrors(() => {
      if (typeof className !== "string") throw new Error("string is required");
    });
    const classNames = className.split(" ");
    classNames.forEach((className) => this.element.classList.add(className));
    return this;
  }

  html(value = null) {
    if (!value) return this.element;
    this.element.innerHTML = value;
    return this.element;
  }

  append(element) {
    catchErrors(() => {
      if (typeof element !== "object")
        throw new Error("HTML object is required");
    });
    this.element.appendChild(element);
    return this;
  }
}

const DOM = (selector) =>
  (function (selector) {
    return new DOMHandler(selector);
  })(selector);

export { DOM };
