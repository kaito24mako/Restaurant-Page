import '../css/style.css';
import '../css/pageLoad.css';
import '../css/about.css';
import '../css/menu.css';

import { createHeader } from './pageLoad.js';
import { createAboutTab } from './about.js';
import { createMenuTab } from './menu.js';
import { displayMenuItems } from './menu.js';

createHeader();
createAboutTab();
displayMenuItems();

const menuArray = displayMenuItems();
createMenuTab(menuArray);

/* ==== Tab-switching ==== */

window.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.querySelector('#aboutBtn');
    const menuBtn = document.querySelector('#menuBtn');

    const aboutTab = document.querySelector('#aboutTab');
    const menuTab = document.querySelector('#menuTab');

    function showTab(tab) {
        // hide everything
        aboutTab.classList.remove('active-tab');
        menuTab.classList.remove('active-tab');
        // show tab 
        tab.classList.add('active-tab');
    }

    aboutBtn.addEventListener('click', () => {
        showTab(aboutTab);
    })

    menuBtn.addEventListener('click', () => {
        showTab(menuTab);
    })

    showTab(aboutTab);
})





