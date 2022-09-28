 const manu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const collaps = document.querySelector('#contact-2')

manu_btn.addEventListener('click', function (){
    manu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active')
})
function closeMenu()
{
    manu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

