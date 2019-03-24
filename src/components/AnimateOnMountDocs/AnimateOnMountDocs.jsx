import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import './AnimateOnMountDocs.css';
import PropsCard from '../PropsCard/PropsCard';
import { resetScroll } from '../../helpers';

class AnimateOnMountDocs extends Component {
  componentDidMount() {
    resetScroll();
  }

  codeStrings = {
    exampleOne: `render() {
    <div>
        {show && <SomeComponent />}
    </div>
}`
  };

  getCodeString(input) {
    return this.codeStrings[input];
  }

  render() {
    return (
      <FadeIn left by={300}>
        <div className="animateOnMountDocs">
          <h1>AnimateOnMount</h1>
          <p>
            The AnimateOnMount component is used to animate components that enter and leave the DOM.
            Since React utilises a viritual DOM we often use expressions to handle conditional
            rendering. For example:
            <pre>
              <code>{this.getCodeString('exampleOne')}</code>
            </pre>
          </p>
          <p>
            This presents a problem when we want to have components that animate when they enter and
            leave the DOM. AnimateOnMount solves this problem by acting as a middleman between the
            condition to show and the component that is to be shown. It will offset the removal of
            the component from the DOM until it has finished it's animation.
          </p>
          <a
            href="https://codesandbox.io/s/kw7r4yxyx7?fontsize=14"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            See a live example here
          </a>
          <h2>Props</h2>
          <PropsCard
            title="mounted: boolean"
            explanation="Decides whether or not to display the content it wraps."
          />
          <PropsCard
            title="start: string"
            explanation="Represents the name of the CSS class you want as a starting point for your wrapped content. For example the baseline for animation."
          />
          <PropsCard
            title="enter: string"
            explanation="Represents the name of the CSS class you want to apply when the content is entering the DOM. Typically this CSS class will contain the actual animation."
          />
          <PropsCard
            title="leave: string"
            explanation="Represents the name of the CSS class you want to apply when the content is leaving the DOM."
          />
        </div>
      </FadeIn>
    );
  }
}
export default AnimateOnMountDocs;
