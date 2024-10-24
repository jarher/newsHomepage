const eventHandler = {
  clickListener(array, functionProps) {
    const [elementToClick, clickFunction] = array;
    elementToClick.addEventListener("click", () =>
      clickFunction(functionProps)
    );
  },
};

export default eventHandler;
