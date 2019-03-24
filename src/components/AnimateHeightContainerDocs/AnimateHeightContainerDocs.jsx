import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import PropsCard from '../PropsCard/PropsCard';
import { resetScroll } from '../../helpers';

class AnimateHeightDocs extends Component {
  componentDidMount() {
    resetScroll();
  }

  codeStrings = {
    exampleOne: `
handleAnimateHeight = (transitionAmount, selectedId) => {
  this.setState({ transitionAmount, selectedId });
};

render() {
  <div className="app">
    <AnimateHeightContainer 
      transitionAmount={this.state.transitionAmount} 
      selectedId={this.state.selectedId}
    >
      <AnimateHeight
        shouldChange={this.state.open}
        animateHeightId={1}
        callback={this.handleAnimateHeight}
      />
      <VideoImage
        animateHeightId={2}
      />
      <Slideshow
        animateHeightId={3}
      />
    </AnimateHeightContainer>
  </div>
}`,
    exampleTwo: `
handleAnimateHeight = (transitionAmount, selectedId) => {
  const { transitionAmounts } = this.state;
  const result = [];

  if (transitionAmount === 0) {
    transitionAmounts.forEach(item => {
      if (item.id === selectedId) {
        return;
      }
      result.push(item);
    });
  } else {
    const item = { id: selectedId, transitionAmount };
    result.push(...transitionAmounts, item);
  }
  this.setState({ transitionAmounts: result });
};

render() {
  return (
    <div className="app">
      <AnimateHeightContainer
        transitionAmounts={this.state.transitionAmounts}
      >
        <Accordion
          title={"Top Movies"}
          animateHeightId={1}
          handleAnimateHeight={this.handleAnimateHeight}
        />
        <Accordion
          title={"Top Actors"}
          animateHeightId={2}
          handleAnimateHeight={this.handleAnimateHeight}
        />
        <Accordion
          title={"Top TV Shows"}
          animateHeightId={3}
          handleAnimateHeight={this.handleAnimateHeight}
        />
      </AnimateHeightContainer>
    </div>
  );
 }
}`
  };

  getCodeString(property) {
    return this.codeStrings[property];
  }

  render() {
    return (
      <FadeIn left by={300}>
        <div className="animateHeightDocs">
          <div className="animateHeightInfo">
            <h1>AnimateHeightContainer</h1>
            <p>
              This component plays together with AnimateHeight. Since AnimateHeight works by using
              transforms, we need to move the other pieces of our webpages accordingly. This
              component helps to smooth out that process.
            </p>
            <p>
              AnimateHeightContainer takes in the transitionAmount and selectedId that you can
              retrieve by passing a callback function to the AnimateHeight component. Using these
              attributes, it wraps every child inside it in a div, and applies the transformation
              with the transformation amount to that div if the id is greater than the currently
              selected id passed into the component.
            </p>

            <h2>How it works</h2>
            <p>Consider the following example:</p>
            <pre>
              <code>{this.getCodeString('exampleOne')}</code>
            </pre>
            <p>
              In this example we have a single AnimateHeight component and we need to change the
              position of the VideoImage and SlideShow components. When AnimateHeight is activated,
              our callback function will trigger inside the AnimateHeight component and update the
              parent components state with transitionAmount and selectedId. Once this happens,
              AnimateHeightContainer will receive these attributes as props and determine which
              content should be moved.
            </p>
            <p>
              In this case, since the selectedId id is 1, AnimateHeightContainer will check it's
              children one by one and see that VideoImage and Slider components animateHeightId is
              greater than the selectedId, and apply the transformation with the provided
              transitionAmount.
            </p>
            <a
              href="https://codesandbox.io/s/6zz62yp65w?fontsize=14"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <p>You can see an example of this here</p>
            </a>
            <h3>What about using multiple AnimateHeight components?</h3>
            <p>
              The above example would of course break if you ever were in a situation where you
              needed to take into account the height of multiple scaled containers. So
              AnimateHeightContainer is configured to either take transitionAmount and selectedId as
              props, or an array of transitionAmounts. If an array is passed it expects it to be in
              the form of <br />
              <br />
              <code>{`[{id: number, transitionAmount: number }]`}</code>
              <br />
              <br />
            </p>
            <p>
              This means that we can use multiple AnimateHeights in a structure like Accordion and
              have the surrounding content move accordingly (pun intended). Consider the following
              example:
            </p>
            <pre>
              <code>{this.getCodeString('exampleTwo')}</code>
            </pre>
            <p>
              In the above example there is an AnimateHeight component placed in each accordion that
              receives the handleAnimateHeight function and animateHeightId. When AnimateHeight is
              activated, internally it will call handleAnimateHeight with the transitionAmount and
              animateHeightId. It will also call the callback function when it is closed, this time
              with the input of transitionAmount 0 and the same AnimateHeightId.
            </p>
            <p>
              This allows us to add and remove items with the shape that AnimateHeightContainer
              expects, and pass them in as props. The component will then take this array and make
              the necessary adjustments based on the animateHeightIds of it's children.
            </p>
            <p>
              It goes something like this: For every child in AnimateHeightContainer, loop over the
              transitionAmounts array and check if it's id is greater than my childs
              animateHeightId. If it is, add it's transitionAmount to the result. Once all item's
              are checked return a jsx div moved by the final amount.
            </p>
            <a
              href="https://codesandbox.io/s/202w3n81q0?fontsize=14"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              See a live example here
            </a>
            <h2>Props</h2>
            <PropsCard
              title="transitionAmount: number"
              explanation="Controls the amount surrunding content needs to move when AnimateHeight is activated"
            />
            <PropsCard
              title="selectedId: number"
              explanation="Represents the id of the activated AnimateHeight. Used to determine which content to move"
            />
            <PropsCard
              title="transitionAmounts: [{ transitionAmount: number, id: number }]"
              explanation="Used when you have multiple AnimateHeight containers and you need to move content taking into account the transitionamount of multiple scaled containers. Used instead of transitionAmount and selectedId. NB: The AnimateHeightContainer component will not work correctly if you specify transitionAmounts and selectedId/transitionAmount props."
            />
          </div>
        </div>
      </FadeIn>
    );
  }
}
export default AnimateHeightDocs;
