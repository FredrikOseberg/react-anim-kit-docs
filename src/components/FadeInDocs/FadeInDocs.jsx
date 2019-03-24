import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import './FadeInDocs.css';
import PropsCard from '../PropsCard/PropsCard';
import { resetScroll } from '../../helpers';

class FadeInDocs extends Component {
  componentDidMount() {
    resetScroll();
  }

  codeStrings = {
    exampleOne: `
<FadeIn right by={300}>
This will be faded in right by 300px
</FadeIn>

<FadeIn up by={500} delayBy={2}>
This will be faded in upwards by 500px after 2 seconds
</FadeIn>

<FadeIn left by={150} easeTiming={1s}>
This will change the default ease timing 
from 0.5s to 1s and fade in left by 150px
</FadeIn>

<FadeIn down by={200}>
    This will fade down by 200px instantly.
    <FadeIn left by={200} delayBy={1}>
        This will fade in left after 1s.
    </FadeIn>
</FadeIn>`
  };

  getCodeString(property) {
    return this.codeStrings[property];
  }

  render() {
    return (
      <FadeIn left by={300}>
        <div className="fadeInDocs">
          <h1>FadeIn</h1>
          <p>
            The FadeIn component uses opacity to fade in any of it's children. It is composable, so
            you can have nested FadeIn components within FadeIn components, making it very easy to
            create animations that build on each other. Every slide in animation on this page is created using this component.
          </p>
          <pre>
            <code>{this.getCodeString('exampleOne')}</code>
          </pre>
          <h2>Props</h2>
          <PropsCard
            title="up: boolean"
            explanation="Decides which direction fadein should occur from. If true, component content will fade in from the bottom up."
          />
          <PropsCard
            title="down: boolean"
            explanation="Decides which direction fadein should occur from. If true, component content will fade in from the top down."
          />
          <PropsCard
            title="left: boolean"
            explanation="Decides which direction fadein should occur from. If true, component content will fade in from right to left"
          />
          <PropsCard
            title="right: boolean"
            explanation="Decides which direction fadein should occur from. If true, component content will fade in from left to right."
          />
          <PropsCard
            title="easeTiming: number (seconds)"
            explanation="Determines the easetiming for the transform. Denoted in seconds. For example: 0.5"
          />
          <PropsCard
            title="delayBy: number (seconds)"
            explanation="Determines whether or not the animation will be delayed. Denoted in seconds. For example: 0.5"
          />
        </div>
      </FadeIn>
    );
  }
}
export default FadeInDocs;
