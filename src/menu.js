import './menu.css';

export function menu(){
    let body = document.querySelector('.body');

    // removing all preexisting child nodes in the body
    while(body.firstChild){
        body.firstChild.remove();
    }

    // reloading all the child nodes in the body for home page
    let mainTitle = document.createElement('div');
    mainTitle.classList.add('mainTitle');
    mainTitle.textContent = "MAINS";

    let drinkTitle = document.createElement('div');
    drinkTitle.classList.add('drinkTitle');
    drinkTitle.textContent = "DRINKS";

    let dessertTitle = document.createElement('div');
    dessertTitle.classList.add('dessertTitle');
    dessertTitle.textContent = "DESSERTS";

    body.appendChild(mainTitle);
    body.appendChild(drinkTitle);
    body.appendChild(dessertTitle);
}