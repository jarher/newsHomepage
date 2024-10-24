function fade(element, isFading) {
  isFading ? (element.style.opacity = 1) : (element.style.opacity = 0);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function switchIn({
  firstElement,
  secondElement,
  firstClassName,
  secondClassName,
}) {
  toggleClass(firstElement, firstClassName);
  let fadeInterval = setTimeout(() => fade(firstElement, true), 100);
  let classInterval = setTimeout(
    () => toggleClass(secondElement, secondClassName),
    500
  );
}

function switchOut({
  firstElement,
  secondElement,
  firstClassName,
  secondClassName,
}) {
  toggleClass(secondElement, secondClassName);
  let fadeInterval = setTimeout(() => fade(firstElement, false), 500);
  let classInterval = setTimeout(
    () => toggleClass(firstElement, firstClassName),
    1000
  );
}

export { switchIn, switchOut };
