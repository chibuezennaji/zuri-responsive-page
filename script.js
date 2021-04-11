const toggleButton = document.getElementsByClassName('toggle-button');
const navLinks = document.getElementsByClassName('divnav-links');

toggleButton.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
});