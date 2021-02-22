import './styles.css'

const counter = document.getElementById('counter')
const btnAdd = document.getElementById('add')
const btnSub = document.getElementById('sub')
const btnAsync = document.getElementById('async')
const btnTheme = document.getElementById('theme')

let state = 0;


function render() {
    counter.textContent = state.toString()
}

btnAdd.addEventListener('click', () => {
    state++
    render()
})

btnSub.addEventListener('click', () => {
    state--
    render()
})

btnAsync.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    },2000)
})

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

render()
