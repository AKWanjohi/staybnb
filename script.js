const navBar = document.querySelector('.nav-bar')
const menuIcon = document.querySelector('.menu-icon')

menuIcon.onclick = function () {
  navBar.classList.toggle('show-menu');
}
