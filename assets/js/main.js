const main_nav = document.querySelector(".main-nav");
const menu_container = document.querySelector(".menu-container");

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function switchingMenu({ firstObject, secondObject }, delay) {
  toggleClass(firstObject.firstElement, firstObject.className);
  setTimeout(
    () => toggleClass(secondObject.secondElement, secondObject.className),
    delay
  );
}

document.addEventListener(
  "click",
  (e) => {
    if (e.target.parentElement.className === "open-button") {
      switchingMenu(
        {
          firstObject: {
            firstElement: main_nav,
            className: "main-nav-hidden",
          },
          secondObject: {
            secondElement: menu_container,
            className: "menu-container--collapse",
          },
        },
        200
      );
    }
    if (e.target.parentElement.className === "close-button") {
      switchingMenu(
        {
          firstObject: {
            firstElement: menu_container,
            className: "menu-container--collapse",
          },
          secondObject: {
            secondElement: main_nav,
            className: "main-nav-hidden",
          },
        },
        500
      );
    }
  },
  true
);
