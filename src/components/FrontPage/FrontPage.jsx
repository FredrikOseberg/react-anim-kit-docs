import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import github from '../../assets/github.svg'
import book from '../../assets/book.svg'

import './FrontPage.css';
import Button from '../Button/Button';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage--cover">
        <div className="frontpage--container">
          <FadeIn down by={200} easeTiming={0.6}>
          <img src={logo} alt="logo" />
          <h1 className="frontpage--header">react anim kit</h1>
          </FadeIn>
          <FadeIn left by={300} easeTiming={0.6} delayBy={0.3}>
          <div className="frontpage--copy">
            <p className="frontpage--copy--paragraph">npm install react-anim-kit --save</p>
          </div>
          </FadeIn>
          <FadeIn up by={300} easeTiming={0.6} delayBy={0.5}>
          <div className="frontpage--button--container">
            <Link to="#">
              {' '}
              <Button className="frontpage--button"><img src={github} alt="github" className="frontpage--button--icon" />Github</Button>
            </Link>
            <Link to="/docs">
              <Button className="frontpage--button"><img src={book} alt="book" className="frontpage--button--icon" />Documentation</Button>
            </Link>
          </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}
export default FrontPage;
