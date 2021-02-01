import loadPage from './modules/initial-page-load';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

init();

function addNavEvents() {
  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const contactButton = document.getElementById('contact');
  const nightButton = document.getElementById('nightMode');

  homeButton.addEventListener('click', loadHome);
  menuButton.addEventListener('click', loadMenu);
  contactButton.addEventListener('click', loadContact);
  nightButton.addEventListener('click', darkenPage);
}

function init() {
  loadPage();
  loadHome();
  addNavEvents();
}

var counter = 0;
function darkenPage() {
  //  change background and header
  const background = document.getElementsByTagName("html")[0];
  const header = document.getElementById('header');
  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const contactButton = document.getElementById('contact');
  const nightButton = document.getElementById('nightMode');
  const name = document.getElementsByTagName("h1")[0];
  //
  const light = 'url("images/background1.jpg")';
  const dark = 'url("images/background2.jpg")';
  if (counter == 0) {
    background.style.backgroundImage = dark;
    header.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    homeButton.style.color = '#8a8a8a';
    menuButton.style.color = '#8a8a8a';
    contactButton.style.color = '#8a8a8a';
    nightButton.style.color = '#8a8a8a';
    name.style.color = '#8a8a8a';
    counter = 1;
  }else {
    background.style.backgroundImage = light;
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    homeButton.style.color = '#3d3d3d';
    menuButton.style.color = '#3d3d3d';
    contactButton.style.color = '#3d3d3d';
    nightButton.style.color = '#3d3d3d';
    name.style.color = '#3d3d3d';
    counter = 0;
  }
}