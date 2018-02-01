import React, { Component} from 'react';
import Ball from './ball';

export default class Hobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbiesClasses: 'hobbies-start'
    };
  }

  componentDidMount() {
    setTimeout( ()=> {
      this.setState({
        hobbiesClasses: 'hobbies-end'
      });
    }, 20);
  }

  render() {
    const hobbiesClasses = `hobbies ${this.state.hobbiesClasses}`;

    return (
      <div className={hobbiesClasses} >
        <h3>HOBBIES</h3>
          <Ball />
        <div className='hobbies-block'>
          <p>Video Games :</p>
          <img  src="./../../img/dota.png" alt=""/>
        </div>
        <div className='hobbies-block'>
          <p>VolleyBall</p>
          <img  src="./../../img/vb.png" alt=""/>
        </div>
      </div>
    );
  }
}
