const addButton = document.querySelector('#btn')
const input = document.querySelector('#input')
const datatime = document.querySelector('#datatime')
const list = document.querySelector('#list')
let arr = []
function createElements(...array) {
    return array.map(el => {
        return document.createElement(el)
    })
}


addButton.addEventListener('click', () => {
    const [
        li,
        textElement,
        time,
        div,
        green,
        red,
        button
    ] = createElements('li', 'span','sapn', 'div', 'span', 'span', 'button')

    textElement.textContent = input.value
    time.textContent = datatime.value
    button.textContent = 'X'

    time.className = 'time'
    div.className = 'colors'
    green.className = 'green'
    red.className = 'red'

    div.append(time, green, red)
    li.append(textElement, div, button)
    list.append(li)


    button.addEventListener('click', () => li.remove())
    green.addEventListener('click', () => {
        li.classList.remove('liRed')
        li.classList.toggle('liGreen')
    })
    red.addEventListener('click', () => {
        li.classList.remove('liGreen')
        li.classList.toggle('liRed')
    })

})
