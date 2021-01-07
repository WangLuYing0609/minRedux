import { func } from "prop-types"

export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState = {}
    let currentListeners = []

    function getState() {
        return currentState
    }
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(v => v())
        return action
    }
    dispatch({ type: 'min-redux@wangluying' })
    return { getState, subscribe, dispatch }
}

function bindActionCreator(creators, dispatch) {
    return (...args) => dispatch(creators(...args))
}

// 创造器
export function bindActionCreators(creators, dispatch) {
    let bound = {}
    Object.keys(creators).forEach(v => {
        let creator = creators[v]
        bound[v] = bindActionCreator(creator, dispatch)
    });
    return bound
}

export function compose(...funcs) {
    if (funcs.length === 0) {
        return args => args
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((ret,item)=>(...args)=>ret(item(...args)))
}

export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = store.dispatch
        const midApi = {
            getState: store.getState(),
            dispatch: (...args) => dispatch(...args)
        }
        const middlewareChain = middlewares.map(middleware => middleware(midApi))
        dispatch = compose(...middlewareChain)(store.dispatch)
        // dispatch = middleware(midApi)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}