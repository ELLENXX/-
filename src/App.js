import React, { Component } from 'react';
import './css.less';
import store from './store';
import {BrowserRouter,Route} from 'react-router-dom';//引入
class App extends Component {
  render() {
    return (
      <div style={{height:"100%"}}>
        {this.props.children}
      </div>
    
    );
  }
}

export default App;
