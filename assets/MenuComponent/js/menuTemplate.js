import { DOM } from "./DOMHandler.js";

const navTemplate = (menuList) => {
  const navContent = `
        <div class="menu-container menu-collapse">
          <button class="close-nav-button">
            <img src="./assets/images/icon-menu-close.svg" alt="close icon" data-name='close-modal'>
          </button>
          <menu class="main-menu">
            ${menuList.map((li) => li).join("")}
          </menu>
        </div>`;

  const nav = DOM().create("nav").addClass("main-nav hidden").html(navContent);
  return nav;
};

const open_nav_button = () => {
  const imgTemplate = `<img src="./assets/images/icon-menu.svg" alt="open icon" data-name="open-modal">`;
  const button = DOM()
    .create("button")
    .addClass("open-nav-button")
    .html(imgTemplate);
  return button;
};

export const includeNavToHeader = (menuList, DOM) => {
  [open_nav_button(), navTemplate(menuList)].forEach((element) =>
    DOM("header").append(element)
  );
};
