import {applyMiddleware, createStore, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from 'redux-logger'

import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";
import './styles.css'


const counter = document.getElementById('counter')
const btnAdd = document.getElementById('add')
const btnSub = document.getElementById('sub')
const btnAsync = document.getElementById('async')
const btnTheme = document.getElementById('theme')

//function logger(state){
//    return function (next) {
//        return function (action) {
//            console.log('Old State', state.getState())
//            console.log('Action', action)
//            const newState = next(action)
//            console.log('State', newState)
//            return newState
//        }
//    }
//}


let store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
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

btnTheme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})


store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [btnAdd, btnSub, btnAsync, btnTheme].forEach( btn => {
        btn.disabled = state.theme.disabled
    })
})

store.dispatch({ type:'INIT_APP' })
