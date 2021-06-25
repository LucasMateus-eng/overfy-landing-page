window.addEventListener('load', activeToggle)

function activeToggle() {
    let menuToggle = document.querySelector('#container .menu-toggle-container')

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active')
        
        let menu = document.querySelector('#container .menu')
        menu.classList.toggle('active')
    })   

    disableToggle()
}

function disableToggle() {
    let destinations = document.querySelector('#container #a-destinations')
    let prices = document.querySelector('#container #a-prices')

    eventDisable(destinations)
    eventDisable(prices)
}

function eventDisable(element) {
    element.addEventListener('click', () => {
        let menuToggle = document.querySelector('#container .menu-toggle-container')
        let menu = document.querySelector('#container .menu')

        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
    })
}