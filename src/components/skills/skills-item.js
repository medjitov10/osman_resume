import React, {Component} from 'react';
// import {Area, CirclePie, BarMetric} from 'react-simple-charts';

class SkillsItem extends Component {
  constructor() {
    super();
    this.state = { start: 0 };
  }

  componentDidMount() {
    this.interval = setInterval( () => {
      if ( this.state.start < this.props.percent ) {
        this.setState({
          start: parseInt(this.state.start + 1)
        });
      } else {
        clearInterval(this.interval);
      }
    }, 15);
  }


  componentWillUnmount() {

    clearInterval(this.interval);
  }

  render() {
    const { percent, color, name } = this.props;
    return (
      <div className='skills-item'>
        <h4>{name}</h4>
        <div>
          {/* <CirclePie
            percent={this.state.start}
            width={200}
            strokeColor={color}
            strokeWidth={5}
            labelFontSize='16'
            border= 'none'
            padding= {10}
          /> */}

        </div>
      </div>
    );
  }
}

export default SkillsItem;
