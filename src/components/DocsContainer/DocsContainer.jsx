import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Overview from '../Overview/Overview';
import AnimateHeightDocs from '../AnimateHeightDocs/AnimateHeightDocs';
import FadeInDocs from '../FadeInDocs/FadeInDocs';
import AnimateHeightContainerDocs from '../AnimateHeightContainerDocs/AnimateHeightContainerDocs';
import AnimateOnMountDocs from '../AnimateOnMountDocs/AnimateOnMountDocs';
import AnimateHeightBySacrificingPerfDocs from '../AnimateHeightBySacrificingPerfDocs/AnimateHeightBySacrificingPerfDocs';

import './DocsContainer.css';

class DocsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSidebar: false
    }
  }

  toggleSidebar = () => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))
 
  render() {
    return (
      <div className="docs--container">
        <Header toggleSidebar={this.toggleSidebar} />
        <div className="docs--inner--container">
          <Sidebar toggleSidebar={this.toggleSidebar} showSidebar={this.state.showSidebar}/>
          <div className="docs--content">
            <Route exact path="/docs" component={Overview} />
            <Route path="/docs/animateheight" component={AnimateHeightDocs} />
            <Route path="/docs/animateheightcontainer" component={AnimateHeightContainerDocs} />
            <Route path="/docs/fadein" component={FadeInDocs} />
            <Route path="/docs/animateOnMount" component={AnimateOnMountDocs} />
            <Route
              path="/docs/animateheightbysacrificingperf"
              component={AnimateHeightBySacrificingPerfDocs}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DocsContainer;
