import React, { Component } from 'react';

import './PropsCard.css';

class PropsCard extends Component {
  render() {
    const { title, explanation } = this.props;
    return (
      <div className="propscard">
        <h1 className="propscard--title">{title}</h1>
        <p className="proprscard--explanation">{explanation}</p>
      </div>
    );
  }
}
export default PropsCard;
