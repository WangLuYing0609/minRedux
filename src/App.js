import './App.css';
import React from 'react'
import { connect } from './min.react-redux'
import { addGun, lostGun, secondAdd } from './redux.js'
@connect(state => ({ gun: state }), { addGun, lostGun, secondAdd })
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>现有{this.props.gun}</p>
        <button onClick={() => { this.props.addGun() }}>增加</button>
        <button onClick={() => { this.props.lostGun() }}>减少</button>
        <button onClick={() => { this.props.secondAdd() }}>过两秒再增加</button>
        {/* <button onClick={() => { console.log(this.props); }}>增加</button> */}
      </div>
    )
  }
}

// connect的另一种写法
// App = (state => state, { addGun, lostGun, secondAdd })(App)




// function App() {
//   return (
//     <div className="App">
//       <button>增加</button>
//       <button>减少</button>
//       <button>过两秒再增加</button>
//     </div>
//   );
// }

export default App;
