const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')
const button = document.querySelector('.button-selector');
const theme = localStorage.getItem('theme');
const getSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');


openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active')
})

if (theme == 'dark') {
    document.documentElement.classList.add('theme-dark');
} else if (theme == 'light') {
    document.documentElement.classList.add('theme-light');
} else if (getSystemDarkMode.matches) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('theme-dark');
} else {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.add('theme-light');
}
button.addEventListener('click', () => {
    if (theme == 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    document.documentElement.classList.toggle('theme-light');
    document.documentElement.classList.toggle('theme-dark');
});