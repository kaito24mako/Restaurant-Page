import '../css/style.css';
import '../css/pageLoad.css';
import '../css/about.css';
import '../css/menu.css';
import '../css/contact.css';

import { createHeader } from './pageLoad.js';
import { createAboutTab } from './about.js';
import { createMenuTab } from './menu.js';
import { displayMenuItems } from './menu.js';
import { createContactTab } from './contact.js';

createHeader();
createAboutTab();
displayMenuItems();
createContactTab();

const menuArray = displayMenuItems();
createMenuTab(menuArray);

/* ==== Tab-switching ==== */

window.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.querySelector('#aboutBtn');
    const menuBtn = document.querySelector('#menuBtn');
    const contactBtn = document.querySelector('#contactBtn');

    const aboutTab = document.querySelector('#aboutTab');
    const menuTab = document.querySelector('#menuTab');
    const contactTab = document.querySelector('#contactTab');

    function showTab(tab, button) {
        // hide tabs
        aboutTab.classList.remove('active-tab');
        menuTab.classList.remove('active-tab');
        contactTab.classList.remove('active-tab');
        // show tab 
        tab.classList.add('active-tab');

        // hide active buttons
        aboutBtn.classList.remove('active-btn');
        menuBtn.classList.remove('active-btn');
        contactBtn.classList.remove('active-btn');
        // show active button
        button.classList.add('active-btn');
    }

    aboutBtn.addEventListener('click', () => {
        showTab(aboutTab, aboutBtn);
    })

    menuBtn.addEventListener('click', () => {
        showTab(menuTab, menuBtn);
    })

    contactBtn.addEventListener('click', () => {
        showTab(contactTab, contactBtn);
    })

    showTab(aboutTab, aboutBtn);
})





