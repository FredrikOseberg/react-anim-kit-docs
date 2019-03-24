import React from 'react';

import './Button.css';

class Button extends React.Component {
  render() {
    const { className } = this.props;
    return <button className={`button ${className}`}>{this.props.children}</button>;
  }
}

export default Button;
