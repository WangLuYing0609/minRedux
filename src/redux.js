const ADD_GUN = 'ADD_GUN'
const LOST_GUN = 'LOST_GUN'

const initState = {
    num: 10
}

export function gun(state = initState, action) {
    switch (action.type) {
        case ADD_GUN:
            return
        case LOST_GUN:
            return
        default:
            return 10
    }
}