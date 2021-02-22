import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, decrement, increment} from "./redux/actions";
import './styles.css'

const counter = document.getElementById('counter')
const btnAdd = document.getElementById('add')
const btnSub = document.getElementById('sub')
const btnAsync = document.getElementById('async')
const btnTheme = document.getElementById('theme')

function logger(state){
    return function (next) {
        return function (action) {
            console.log('Old State', state.getState())
            console.log('Action', action)

            const newState = next(action)

            console.log('State', newState)
            return newState
        }
    }
}


let store = createStore(
    rootReducer,
    0,
    applyMiddleware(thunk, logger)
);


btnAdd.addEventListener('click', () => {
    store.dispatch(increment())
})

btnSub.addEventListener('click', () => {
    store.dispatch(decrement())
})

btnAsync.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})


store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state;
})

store.dispatch({ type:'INIT_APP' })


btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

