const genericTimer = (props) => {
  const [callback, delay] = props;
  let timeoutId = setTimeout(() => {
    callback();
    clearTimeout(timeoutId);
  }, delay);
};

const switcher = ({
  firstToggler,
  secondToggler,
  thirdToggler,
  firstDelay,
  secondDelay,
}) => {
  //execution of menu toggle
  // secondToggler & thirdToggler for temporization
  firstToggler();
  [
    [secondToggler, firstDelay],
    [thirdToggler, secondDelay],
  ].forEach((props) => genericTimer(props));
};

const switchIn = (props, DOM) => {
  const { hideClass, transformClass, opacityClass } = props;
  const navContainer = DOM("header nav");
  const menuContainer = DOM(".menu-container");

  const transitionCallbacksAndDelays = {
    //function that shows or hide nav html element
    firstToggler() {
      navContainer.toggleClass(hideClass);
    },
    // function that asign opacity class to nav html element
    secondToggler() {
      navContainer.toggleClass(opacityClass);
    },
    //function that asign transform property class to menu html element
    thirdToggler() {
      menuContainer.toggleClass(transformClass);
    },
    // first delay for secondToggler
    firstDelay: props.switchInContainerDelay,
    //second delay for thirdToggler
    secondDelay: props.elementToTransformDelay,
  };
  switcher(transitionCallbacksAndDelays);
};

const switchOut = (props, DOM) => {
  const { hideClass, transformClass, opacityClass } = props;
  const navContainer = DOM("header nav");
  const menuContainer = DOM(".menu-container");

  const transitionCallbacksAndDelays = {
    firstToggler() {
      menuContainer.toggleClass(transformClass);
    },
    secondToggler() {
      navContainer.toggleClass(opacityClass);
    },
    thirdToggler() {
      navContainer.toggleClass(hideClass);
    },
    firstDelay: props.elementToTransformDelay,
    secondDelay: props.switchOutContainerDelay,
  };
  switcher(transitionCallbacksAndDelays);
};

export { switchIn, switchOut, genericTimer };
