import '../dist/stylesheet.css'

import navBar from './nav.js';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';


navBar();
homePage();
menuPage();
contactPage();

// Elements 
const burger = document.querySelector(".hamburger");
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelector('[data-tab-content]');
//Hamburger menu
burger.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("active");
  burger.classList.toggle("toggle");
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    target.classList.add('active')
  })
})


