import React from 'react'
import PropTypes from 'prop-types'

//接收组件，把state数据放进去，返回一个组件
// 数据变化的时候通知组件
export function connect() {

}

export class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }
    constructor(props, context) {
        super(props, context)
        this.state = props.store
    }
    getChildContext() {
        return { store: this.store }
    }
    render() {
        console.log(this.props);
        return this.props.children
    }
}
