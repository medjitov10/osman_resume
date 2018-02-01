import React, { Component } from 'react';
import $ from 'jquery';

export default class SkillsLanguageItem extends Component {
  constructor() {
    super();

    this.state = { start: 0 };

  }

  componentDidMount() {
    this.interval = setInterval( ()=>{
      if ( this.state.start < this.props.percent ) {
        this.setState({ start: this.state.start + 1 });
      } else {
        clearInterval( this.interval );
      }
    }, 20 );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const percent = $('.bar-main').width()/100;
    const { start } = this.state;
    const barProgress = {
      borderRadius: '5px 0 0 5px',
      height: '100%',
      width: `${ start * percent }px`,
      background: `${this.props.color}`
    };

    const percentStyle = {
      left: `${start * percent - 15}`
    };

    return (
      <div className='skills-language-item' >
        <div  className='bar-main-cover'>
          <div className='bar-name'>
            {this.props.name}
          </div>
          <div className='bar-main'>
            <div className='bar-progress' style={barProgress}>
              <div style={percentStyle} className='bar-percent'><span>{start}%</span></div>
            </div>
          </div>
        </div>


      </div>

    );
  }
}
