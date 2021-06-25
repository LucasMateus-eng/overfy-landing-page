window.addEventListener('load', activeToggle)

function activeToggle() {
    let menuToggle = document.querySelector('#container .menu-toggle')

    menuToggle.addEventListener('click', () => {
        let menu = document.querySelector('#container .menu')
        menu.classList.toggle('active')
    })   
}