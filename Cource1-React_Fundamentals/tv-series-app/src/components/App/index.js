import React, {Component} from 'react';
import 'whatwg-fetch';
import Intro from '../Intro';
import './App.css';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount(){
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then((response) => response.json())
      .then(json => this.setState({series:json}))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'> TV Series List </h1>
        </header>
        <Intro message="TEST TEST"/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
