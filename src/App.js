import './App.css';
import React from 'react'
import { connect } from 'react-redux'
@connect(state => state)
class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">

        <button>增加</button>
        <button>减少</button>
        <button>过两秒再增加</button>
      </div>
    )
  }
}

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
