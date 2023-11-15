import './contact.css';

export function contact(){
    let body = document.querySelector('.body');

    // removing all preexisting child nodes in the body
    while(body.firstChild){
        body.firstChild.remove();
    }

    // reloading all the child nodes in the body for home page
    let contactTitle = document.createElement('div');
    contactTitle.classList.add('contactTitle');
    contactTitle.textContent = "CONTACT US";

    let contactMessage = document.createElement('div');
    contactMessage.classList.add('contactMessage');
    contactMessage.textContent = "random contact message right now";

    body.appendChild(contactTitle);
    body.appendChild(contactMessage);
}