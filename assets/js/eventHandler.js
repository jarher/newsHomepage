const eventHandler = {
  clickListener(array) {
    const [elementToClick, clickFunction, functionProps] = array;
    elementToClick.addEventListener("click", () =>
      clickFunction(functionProps)
    );
  },
};

export default eventHandler;
