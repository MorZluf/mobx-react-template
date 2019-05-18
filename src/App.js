import React, { Component } from 'react'
import './App.css';
import { observer } from 'mobx-react'
import Market from './components/Market';
import DevTools from 'mobx-react-devtools'


@observer
class App extends Component {
  
  
  render(){

    return (
      <div className="App">
      <DevTools />
    <Market store={this.props.store} />  
    </div>
  );
}
}

export default App;
