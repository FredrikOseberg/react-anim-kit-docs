import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import './Overview.css';

class Overview extends Component {
  render() {
    return (
      <FadeIn left by={300}>
        <div className="overview">
          <h1>Overview</h1>
          <p>
            This package aims to do things a bit differently. In fact, it's obsessed with performing
            animations in the most performant way possible. Therefore, most of the components
            exposed are working with transforms to make sure that we only touch elements that avoid
            costly layout and paint calculations. To learn more about how the browser render
            webpages{' '}
            <a
              href="https://developers.google.com/web/fundamentals/performance/rendering/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              see this page.
            </a>
          </p>
          <p>
            In order to animate without triggering these expensive effects we are left with a few,
            but powerful features. This library aims to use these features to circumvent the cost of
            layout and paint. For a full list of which css properties trigger layout and paint,{' '}
            <a
              href="https://csstriggers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              check out css triggers.
            </a>
          </p>
          <h2>Components</h2>
          <pre>
            <code>
              {`<AnimateHeight>
<AnimateOnMount>
<AnimateHeightContainer>
<FadeIn>
<AnimateHeightBySacrificingPerf>`}
            </code>
          </pre>
          <h2>Performance</h2>
          <p>
            Performance is important. Not only for user experience, but also for the bottom line of
            any business aiming to capture an online audience. Traditional animation usually touches
            a lot of properties that perform costly calculations in the browser, which may influence
            the experience, and revenue, of our web applications.
          </p>
          <h2>Can I use any of this without using React?</h2>
          <p>
            While this library is built on React, the principles are universal and can be used with
            any JS framework, or vanilla JS. The most difficult and perhaps most useful feature of
            this library is AnimateHeight. I've taken the time to build out an example in vanilla js
            that can be used as a reference for implementing this technique in your own projects.{" "}
            <a
              href="https://codesandbox.io/s/3x2zjl0l7m"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              You can find the example here.
            </a>
          </p>
        </div>
      </FadeIn>
    );
  }
}
export default Overview;
