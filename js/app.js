const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('menu')

vegburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
})
