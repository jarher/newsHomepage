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

function switchIn(params) {
  const {
    container,
    elementToTransform,
    hideClass,
    opacityClass,
    transformClass,
    switchInContainerDelay,
    elementToTransformDelay,
  } = destructuring(params);

  toggleClass(container, hideClass);
  let fadeInterval = setTimeout(() => {
    toggleClass(container, opacityClass), clearTimeout(fadeInterval);
  }, switchInContainerDelay);
  let classInterval = setTimeout(() => {
    toggleClass(elementToTransform, transformClass),
      clearTimeout(classInterval);
  }, elementToTransformDelay);
}

function switchOut(params) {
  const {
    container,
    elementToTransform,
    hideClass,
    opacityClass,
    transformClass,
    switchOutContainerDelay,
    elementToTransformDelay,
  } = destructuring(params);

  toggleClass(elementToTransform, transformClass);
  let fadeInterval = setTimeout(() => {
    toggleClass(container, opacityClass), clearInterval(fadeInterval);
  }, elementToTransformDelay);
  let classInterval = setTimeout(() => {
    toggleClass(container, hideClass), clearTimeout(classInterval);
  }, switchOutContainerDelay);
}

export { switchIn, switchOut };
