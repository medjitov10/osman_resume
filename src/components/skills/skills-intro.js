import React, {Component} from 'react';

export default class SkillsIntro extends Component {
  constructor() {
    super();
    this.state = {
      animate: 'skills-intro-animate-start',
      conclusion: 'skills-intro-conclusion-start'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: 'skills-intro-animate-end',
        conclusion: 'skills-intro-conclusion-end'
      });
    }, 1);
  }

  render() {
    return (
      <div className='skills-intro-div'>
        <h3 className={this.state.animate}>Professional skills</h3>
        <p className={this.state.conclusion}>
          There is my evaluation opinion about my skills in percent
        </p>
      </div>
    );
  }
}
