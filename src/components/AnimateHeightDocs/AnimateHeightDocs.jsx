import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import PropsCard from '../PropsCard/PropsCard';

import './AnimateHeightDocs.css';
import { Link } from 'react-router-dom';
import { resetScroll } from '../../helpers';

class AnimateHeightDocs extends Component {
  componentDidMount() {
    resetScroll();
  }

  codeStrings = {
    exampleOne: `
  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <AnimateHeight
            style={{ backgroundColor: "#f2f2f2" }}
            shouldChange={this.state.open}
            renderSpaceAfter
          >
            <div>
              {!this.state.open && (
                <div>
                  <p>Render this initially</p>
                </div>
              )}
              {this.state.open && (
                <p style={{ marginTop: "4rem" }}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.
                  Aenean enim nulla, lobortis vitae 
                  elit a, tempor ultrices
                  magna.
                </p>
              )}
            </div>
          </AnimateHeight>
          <button
            onClick={this.handleClick}
          >
            Hello
          </button>
        </div>
      </div>
    );
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
            <h1>AnimateHeight</h1>
            <p>
              This component works a bit differently. In fact, to make it performant, it actually
              doesn't animate height at all. Instead it leverages the capabilities of transform:
              scaleY to be able to give the illusion of animating height.
            </p>
            <p>
              It performs calculations to scale an absolutely positioned background to adjust to the
              content, and gives you the ability to pass in a callback that will receive the
              transition amount so you can adjust the surrounding content. This way, we perform the
              minimum amount of layout and paint.
            </p>
            <h2>How it works</h2>
            <p>Let's see a simple example:</p>
            <pre>
              <code>{this.getCodeString('exampleOne')}</code>
            </pre>
            <p>There are a few things to note here:</p>
            <ul>
              <li>The styling of the background of the element is set on AnimateHeight</li>
              <li>AnimateHeight takes a shouldChange property</li>
            </ul>
            <p>
              So let's walk through what is going on here. The containing div serves only as a
              shell, while the transformation of scaleY happens on an absolutely positioned div that
              is configured to span the entire width and height of the container.
            </p>
            <p>
              When the button is clicked, the open property will change and AnimateHeight will start
              doing work. First it will get the new height of the content. Then it will use this and
              calculate the amount that the background needs to scale. The background is then scaled
              to fit the new content.
            </p>
            <a
              href="https://codesandbox.io/embed/983z7n92rw?fontsize=14"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              See a simple example here on Codesandbox
            </a>
            <h3>What about surrounding content?</h3>
            <p>
              Using transforms make the animation a lot more performant, because we skip expensive
              layout and paint on every frame. However, since we are now using transform, the
              surrounding content won't react to the change. Therefore AnimateHeight takes a
              callback that receives the transition amount and id (if provided in props) as the two
              arguments to the function. This means that you can update state from a parent
              component and use the transition amount to transition the surrounding content.
            </p>
            <a
              href="https://codesandbox.io/s/jn5rp5jvzy?fontsize=14"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              See an example of moving surrounding content on Codesandbox
            </a>
            <h3>AnimateHeightContainer</h3>
            <p>
              If there is a lot of content you need to wrap, or multiple even multiple AnimateHeight
              components that affect different parts of your application, you can use the
              AnimateHeightContainer to move your content for you. It's more thourougly described{' '}
              <Link style={{ color: 'blue' }} to="/docs/animateheightcontainer">
                here.
              </Link>
            </p>
            <a
              href="https://codesandbox.io/s/6zz62yp65w?fontsize=14"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              See an example of moving surrounding content with AnimateHeightContainer on
              Codesandbox
            </a>
            <a
              href=" https://codesandbox.io/s/202w3n81q0?fontsize=14"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              See an advanced example of AnimateHeightContainer usage on Codesandbox
            </a>

            <h2>Props</h2>
            <PropsCard
              title="shouldChange: boolean"
              explanation="Controls when the animation should run. Typically it will be the conditional that decides what content to show."
            />
            <PropsCard
              title="style: object"
              explanation="The style prop receives a style object and sets it on the container that is being animated. If you want to set a different background-color, pass a style object with your preferred color of choice."
            />
            <PropsCard
              title="handleTransitionEnd: function"
              explanation="The handleTransitionEnd prop takes a function that is set to listen to transitionEnd events on window."
            />
            <PropsCard
              title="callback: function: (transitionAmount, id) => void"
              explanation="The callback function is called every time the component should change and receives the transitionAmount and optionally the id as input. The transitionamount can then be used to offset surrounding content."
            />
            <PropsCard
              title="id: number"
              explanation="Id is used to keep track of which animateheight is being fired. For example if you use multiple animateHeight and you need to dynamically change which content is offset. Commonly used with AnimateHeightContainer."
            />
            <PropsCard
              title="renderSpaceAfter: boolean"
              explanation="If renderSpaceAfter is set to true, the component will insert a div with height matching the amount the component has been transitioned, to offset the content below the component."
            />
          </div>
        </div>
      </FadeIn>
    );
  }
}
export default AnimateHeightDocs;
