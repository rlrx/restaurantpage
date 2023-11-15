import './home.css';

export function home(){
    let body = document.querySelector('.body');

    // removing all preexisting child nodes in the body
    while(body.firstChild){
        body.firstChild.remove();
    }

    // reloading all the child nodes in the body for home page
    let homeTitle = document.createElement('div');
    homeTitle.classList.add('homeTitle');
    homeTitle.textContent = "RYAN'S FUTURE CAFE";

    let homeMessage = document.createElement('div');
    homeMessage.classList.add('homeMessage');
    homeMessage.textContent = "random message right now";

    let homeTimeInfo = document.createElement('div');
    homeTimeInfo.classList.add('homeTimeInfo');
    homeTimeInfo.textContent = "random timings right now";

    body.appendChild(homeTitle);
    body.appendChild(homeMessage);
    body.appendChild(homeTimeInfo);
}