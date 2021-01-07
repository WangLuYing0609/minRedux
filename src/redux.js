import { createStore } from './min.redux'



const ADD_GUN = 'ADD_GUN'
const LOST_GUN = 'LOST_GUN'

const num = 10
export function gun(state = num, action) {

    console.log(action, 'state');
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
    // console.log('addgun');
    // return dispatch => {
    //     dispatch(add())
    // }
    return { type: ADD_GUN }

}

function lost() {
    return { type: LOST_GUN }
}
export function lostGun() {
    // return dispatch => {
    //     dispatch(lost())
    // }
    return { type: LOST_GUN }
}

export function secondAdd() {   
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}
const store = createStore(gun)
function listener() {
    // console.log(`现在是${store}`);
    // console.log(store);
}
store.subscribe(listener)
addGun()
// store.dispatch({ type: ADD_GUN })
// store.dispatch({ type: LOST_GUN })
// store.dispatch({ type: ADD_GUN })
// store.dispatch({ type: LOST_GUN })