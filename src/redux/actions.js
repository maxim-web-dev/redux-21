import {DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT, THEME} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableBtn())
        }, 1500)

    }
}

export function changeTheme(newTheme) {
    return {
        type: THEME,
        payload: newTheme
    }
}
export function enableBtn() {
    return {
        type: ENABLE_BTN
    }
}
export function disableBtn() {
    return {
        type: DISABLE_BTN
    }
}
