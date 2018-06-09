import React, { Component } from 'react';
import FilterableList from './components/ex-02-filterableList';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>React State</h1>
        <FilterableList/>
      </div>
    );
  }
}

export default App;
