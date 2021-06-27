window.addEventListener('load', handlePlan)
const content = document.querySelector('#container .plan-type')

function handlePlan() {
    if (localStorage.planType) {
        let text = localStorage.planType.toString()
        createLine(text)
    } else {
        setTimeout(() => {
            window.location.assign('../index.html')
        }, 500)
    }

    handleSubmit()
}

function createLine(text) {
    var line = document.createElement('p')
    var textLine = document.createTextNode('Plano ' + text)

    line.appendChild(textLine)
    content.appendChild(line);
}

function handleSubmit() {
    let elementButton = document.querySelector('#container .btn-container #bt-submit')

    elementButton.addEventListener('click', (event) => {
        event.preventDefault()

        alert('Sua compra está sendo processada. Em breve enviaremos informações pelo e-mail :)')
    })
}