import React, {Component} from 'react';

export default class AboutDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: ""
    };
  }

  componentDidMount() {
    const about = `Originally I'm from Ukraine. Moved to United States in
    2014. Since, childhood I passionate about math and programming.I love
    to solve any problems and find best way to solve it. My goal is to
    become expert in coding and improve my skills every day. I am always
    interested in interesting projects, so please send me an email to
    say hello!`.split('');

    this.timer = setInterval( () => {
      if (about.length > 0) {
        this.setState({ about: this.state.about + about.shift()});
      } else {
        clearInterval(this.timer);
      }
    }, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  makeItFast() {
    this.setState({about: `Originally I'm from Ukraine. Moved to United States in
    2014. Since, childhood I passionate about math and programming.I love
    to solve any problems and find best way to solve it. My goal is to
    become expert in coding and improve my skills every day. I am always
    interested in interesting projects, so please send me an email to
    say hello!`});
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className='about-me-description' onClick={this.makeItFast.bind(this)}>
          &nbsp;&nbsp;&nbsp;
          {this.state.about}
      </div>
    );
  }
}
