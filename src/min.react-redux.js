import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './min.redux'

//接收组件，把state数据放进去，返回一个组件
// 数据变化的时候通知组件
export const connect = (mapStateToProps = state => state, mapDispathToProps = {}) => (WarpComponent) => {
    return class ConnectComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(props, context) {
            super(props, context)
            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            const { store } = this.context
            console.log(store,'store');
            store.subscribe(() => this.update())
            this.update()
        }
        update() {
            // 获取mapStateToProps和mapDispathToProps  放在this.props里
            const { store } = this.context
            const stateProps = mapStateToProps(store.getState())
            // 方法不能直接给，因为需要dispath 
            const dispatchProps = bindActionCreators(mapDispathToProps, store.dispatch)
            console.log(stateProps,'stateProps');
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })

        }
        render() {
            return <WarpComponent {...this.state.props}></WarpComponent>
        }
    }
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
        return { store: this.state }
    }
    render() {
        return this.props.children
    }
}
