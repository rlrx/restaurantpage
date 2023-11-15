import {firstLoad} from './firstLoad';
import {home} from './home';
import {menu} from './menu';
import {contact} from './contact';

// initial load of the page
firstLoad();
home();


// button logic for tabbing
let homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', () => {
    home();
});
let menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', () => {
    menu();
});
let contactButton = document.querySelector('.contactButton');
contactButton.addEventListener('click', () => {
    contact();
});



