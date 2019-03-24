import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import FrontPage from './components/FrontPage/FrontPage';
import DocsContainer from './components/DocsContainer/DocsContainer';

import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route path="/" exact component={FrontPage} />
          <Route path="/docs" component={DocsContainer} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
