import React, {Component} from 'react';

export default class AboutTitle extends Component {

  constructor() {
    super();
    this.state = {
      h4: 'about-me-intro-start',
      widthStyle: 'about-me-intro-width-start',
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        h4: 'about-me-intro-end',
        widthStyle: 'about-me-intro-width-end',
      });
    }, 10);
  }

  render() {
    const widthStyle = `about-me-intro no-margin ${this.state.widthStyle}`;
    return (
      <div className = { widthStyle }>
        <h3 className={this.state.h4}>
          Hello, my name is Osman. Welcome to my website =)
        </h3>
      </div>
    );
  }
}
