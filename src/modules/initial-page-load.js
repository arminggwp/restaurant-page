function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const name = document.createElement('h1');
    name.textContent = text;
    header.appendChild(name);
    //
    const homeButton = createButton('home', 'Home');
    const menuButton = createButton('menu', 'Menu');
    const contactButton = createButton('contact', 'Contact');
    const nightButton = createButton('nightMode', '');
    nightButton.innerHTML = '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>'
    nightButton.setAttribute('title', 'Night mode');
    //
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);
    header.appendChild(nightButton);
    return header;
}

function createLogo(id) {
    const logo = document.createElement('logo');
    logo.setAttribute('id', id);
    return logo;
}

function createButton(id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    button.appendChild(span);
    button.classList.add('tab');
    return button;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function loadPage() {
    const content = document.getElementById('content');
    //  header
    const header = createHeader('header', 'Gradska kafana');
    content.appendChild(header);
    //  logo
    const logo = createLogo('logo');
    header.appendChild(logo);
    //  tab-content
    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
}

export default loadPage;