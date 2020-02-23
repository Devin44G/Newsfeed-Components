/*
Array data housing menu items. NOTE: These will not be functioning links,
because the pages to them have not been made and creating <a> tags to wrap the list items in would be too cumbersome
*/
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const MENU = document.querySelector('.menu-button');
const HEADER = document.querySelector('.header');

function hamburgerMenu(arr) {
  let menuDiv = document.createElement('div');
      menuDiv.classList.add('menu');
      HEADER.appendChild(menuDiv);

  let menuList = document.createElement('ul');
      menuDiv.appendChild(menuList);
      MENU.addEventListener('click', () => menuDiv.classList.toggle('menu--open'));

  menuItems.forEach( item => {
    let list = document.createElement('li');
        list.textContent = item;
        menuList.appendChild(list);
  });
}

hamburgerMenu(menuItems);
console.log(hamburgerMenu(menuItems));
