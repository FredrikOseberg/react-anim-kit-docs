import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import times from '../../assets/times.svg'

import './Sidebar.css';

class Sidebar extends Component {
  render() {


    const classes = classnames("sidebar", {
      "sidebar--open": this.props.showSidebar
    })

    return (
      <div className={classes}>
        <div className="sidebar--container">
        <button className="sidebar--close-button" onClick={this.props.toggleSidebar}><img src={times} alt="cross" className="sidebar--close-button--icon" /></button>
          <h1 className="sidebar--header">Documentation</h1>
          <Link to="/docs" onClick={this.props.toggleSidebar}>
            <h2 className="sidebar--subheader">Overview</h2>
          </Link>
          <Link to="/docs/animateheight" onClick={this.props.toggleSidebar}>
            <h2 className="sidebar--subheader">Components</h2>
          </Link>
          <ul className="sidebar--links">
            <Link to="/docs/animateheight" onClick={this.props.toggleSidebar}>
              <li>AnimateHeight</li>
            </Link>
            <Link to="/docs/animateheightcontainer" onClick={this.props.toggleSidebar}>
              <li>AnimateHeightContainer</li>
            </Link>
            <Link to="/docs/fadein" onClick={this.props.toggleSidebar}>
              <li>FadeIn</li>
            </Link>
            <Link to="/docs/animateonmount" onClick={this.props.toggleSidebar}>
              <li>AnimateOnMount</li>
            </Link>
            <Link to="/docs/animateheightbysacrificingperf" onClick={this.props.toggleSidebar}>
              <li>AnimateHeightBySacrificingPerf</li>
            </Link>
          </ul>
              <div className="sidebar--copy">
            <p className="sidebar--copy--paragraph">npm install react-anim-kit --save</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
