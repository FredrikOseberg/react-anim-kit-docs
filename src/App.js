import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FrontPage from './components/FrontPage/FrontPage';
import DocsContainer from './components/DocsContainer/DocsContainer';

import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={FrontPage} />
          <Route path="/docs" component={DocsContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
