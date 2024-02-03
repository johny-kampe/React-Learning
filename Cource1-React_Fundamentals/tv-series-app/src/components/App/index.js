import React, {Component} from 'react';
import 'whatwg-fetch';
import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'> TV Series List </h1>
        </header>
        <Intro message="TEST TEST"/>
        <Series />
      </div>
    );
  }
}

export default App;
