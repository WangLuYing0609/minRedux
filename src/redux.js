import { createStore } from './min.redux'



const ADD_GUN = 'ADD_GUN'
const LOST_GUN = 'LOST_GUN'

const num = 10
export function gun(state = num, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case LOST_GUN:
            return state - 1
        default:
            return 10
    }
}
function add() {
    return { type: ADD_GUN }
}
export function addGun() {
    return dispatch => {
        dispatch(add())
    }
}

function lost() {
    return { type: LOST_GUN }
}
export function lostGun() {
    return dispatch => {
        dispatch(lost())
    }
}

export function secondAdd() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}
const store = createStore(gun)
function listener() {
    console.log(`现在是${store.getState()}`);
}
store.subscribe(listener)
store.dispatch({ type: ADD_GUN })
store.dispatch({ type: LOST_GUN })
store.dispatch({ type: ADD_GUN })
store.dispatch({ type: LOST_GUN })