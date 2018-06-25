import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import s from './App.css';

class App extends Component {
  state = {}

  render() {
    return (
      <div className={s.App}>
        <Counter />
      </div>
    );
  }
}

export default App;
