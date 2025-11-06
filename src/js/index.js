import '../css/style.css';
import '../css/pageLoad.css';
import '../css/about.css';

import { createHeader } from './pageLoad.js';
import { createAboutTab } from './about.js';

createHeader();
createAboutTab();

/* ==== Tab-switching ==== */
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