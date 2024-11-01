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
  firstToggler();
  [
    [secondToggler, firstDelay],
    [thirdToggler, secondDelay],
  ].forEach((props) => genericTimer(props));
};

const returnSwitchProperties = (arrayValues) => {
  const [
    firstTogglerCallback,
    secondTogglerCallback,
    thirdTogglerCallback,
    firstDelayValue,
    secondDelayValue,
  ] = arrayValues;

  const switcherProps = {
    firstToggler() {
      firstTogglerCallback();
    },
    secondToggler() {
      secondTogglerCallback();
    },
    thirdToggler() {
      thirdTogglerCallback();
    },
    firstDelay: firstDelayValue,
    secondDelay: secondDelayValue,
  };

  return switcherProps;
};

const switchIn = (props, DOM) => {
  const { containerSelector, elementToTransformSelector } = props;
  const container = DOM(containerSelector);
  const elementToTransform = DOM(elementToTransformSelector);

  const transitionCallbacksAndDelays = [
    () => container.toggleClass(props.hideClass),
    () => container.toggleClass(props.opacityClass),
    () => elementToTransform.toggleClass(props.transformClass),
    props.switchInContainerDelay,
    props.elementToTransformDelay,
  ];
  switcher(returnSwitchProperties(transitionCallbacksAndDelays));
};

const switchOut = (props, DOM) => {
  const { containerSelector, elementToTransformSelector } = props;
  const container = DOM(containerSelector);
  const elementToTransform = DOM(elementToTransformSelector);

  const transitionCallbacksAndDelays = [
    () => elementToTransform.toggleClass(props.transformClass),
    () => container.toggleClass(props.opacityClass),
    () => container.toggleClass(props.hideClass),
    props.elementToTransformDelay,
    props.switchOutContainerDelay,
  ];
  switcher(returnSwitchProperties(transitionCallbacksAndDelays));
};

export { switchIn, switchOut, genericTimer };
