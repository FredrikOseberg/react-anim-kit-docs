import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import './AnimateHeightBySacrificingPerfDocs.css';
import PropsCard from '../PropsCard/PropsCard';
import { resetScroll } from '../../helpers';

class AnimateHeightBySacrificingPerfDocs extends Component {
  componentDidMount() {
    resetScroll();
  }

  codeStrings = {
    exampleOne: `const { open } = this.state

<div className="container">
    <AnimateHeightBySacrificingPerf shouldChange={open}>
        {open && <SomeContent />}
        {!open && <OtherContent />}
    </AnimateHeightBySacrificingPerf>
</div>`
  };

  getCodeString(input) {
    return this.codeStrings[input];
  }

  render() {
    return (
      <FadeIn left by={300}>
        <div className="animateHeightBySacrificingPerf">
          <h1>AnimateHeightBySacrificingPerf</h1>
          <p>
            This component is here because it inspired a lot of my work with AnimateHeight. I made
            this component first, then realised how badly it performed - even on my high end Macbook
            Pro. I do not recommend that you use this component if you care about performance. It
            will trigger layout and paint on every frame of the animation, and will lead to poor
            user experience. Use AnimateHeight instead.
          </p>
          <p>
            That being said. It can be useful if you just want to test how something looks, or you
            are making something that is for internal use only. It's dead simple to use:
            <pre>
              <code>{this.getCodeString('exampleOne')}</code>
            </pre>
          </p>
          <a
            href="https://codesandbox.io/s/92n8vlk9ow?fontsize=14"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            See a live example here
          </a>
          <h2>Props</h2>
          <PropsCard
            title="shouldChange: boolean"
            explanation="Controls when the animation should run. Typically it will be the conditional that decides what content to show."
          />
          <PropsCard
            title="transition: string"
            explanation="Provides a way to override the default transition."
          />
          <PropsCard
            title="adjustOnTransitionEnd: boolean"
            explanation="Determines whether to adjust height on transition end. Useful if you have other transformations on the content box"
          />
        </div>
      </FadeIn>
    );
  }
}
export default AnimateHeightBySacrificingPerfDocs;
