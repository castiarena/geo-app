import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';


class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Home name="Pepe"/>
    );
  }
}

ReactDOM.render(<App/>, 
  document.querySelector('#app')
);
