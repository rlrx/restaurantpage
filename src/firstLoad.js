import './firstLoad.css';

export function firstLoad() {
    let content = document.querySelector('#content');

    // header content
    let header = document.createElement('div');
    header.classList.add('header');

    let homeButton = document.createElement('button');
    homeButton.classList.add('homeButton', 'headerButton');
    homeButton.textContent = "HOME";
 

    let menuButton = document.createElement('button');
    menuButton.classList.add('menuButton', 'headerButton');
    menuButton.textContent = 'MENU';
  

    let contactButton = document.createElement('button');
    contactButton.classList.add('contactButton', 'headerButton');
    contactButton.textContent = 'CONTACT';

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);

    // body content 
    let body = document.createElement('div');
    body.classList.add('body');
    

    // footer content
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Copyright OriginalRyan ©';


    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);
}