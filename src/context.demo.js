import React from 'react'
import PropTypes from 'prop-types';
// 

class Son extends React.Component {
    static contextTypes = {
        user: PropTypes.string
    }
    render() {
        console.log(this.context);
        return (
            <div>Son:{this.context.user}</div>
        )
    }
}

class Father extends React.Component {
    render() {
        return (
            <div>
                <p>this is son</p>
                <Son ></Son>
            </div>
        )
    }
}

class Page extends React.Component {
    static childContextTypes = {
        user: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            user: 'page'
        }
    }
    getChildContext() {
        return this.state
    }
    render() {
        return (
            <div >
                <p>{this.state.user}</p>
                <Father ></Father>
            </div>)
    }
}

export default Page