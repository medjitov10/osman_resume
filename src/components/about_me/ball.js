import React, { Component } from 'react';
import $ from 'jquery';

export default class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      e: null,
      start: null,
      flag: true,
      ball: {
        position: 'relative',

        bottom: '0px',
      },
      cancelId: null,
    };
    this.step = this.step.bind(this);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.state.cancelId);
  }

  onImgOver(e) {
    if (this.state.flag) {
      let offset = $('#id').offset();

      this.setState({
        flag: false,
        x: parseInt((e.clientX - offset.left )/($('#id').height()/100)),
        y: parseInt((e.clientY - offset.top )/($('#id').height()/100))
      });

      this.step();
    }
  }

  decrease(pixel, coord) {
    return Math.abs(pixel - ((pixel/100) * (coord % 50) * 2 ));
  }

  increase(pixel, coord) {
    return Math.abs(pixel * (coord  % 50) * 2 / 100 );
  }

  step(timestamp) {

      let {x,y} = this.state;
      if (!this.state.start) this.setState({ start: timestamp});
      let progress = parseInt(timestamp - this.state.start);
      const pixel = (parseInt(progress/2000) % 2) === 0 ? (progress%2000)/20 : (2000-(progress%2000))/20;
      let position1 = null;
      let position2 = null;

      if ( x <=50 && y <= 50 ) {
        if (y === 50) {
          position1 = 0;
        } else if ( y === 50 ) {
          position2 = 0;
        } else {
          position1 = this.decrease(pixel, y);
          position2 = this.decrease(pixel, x);
        }
      }

      if (x > 50 && y <= 50) {
        position1 = this.decrease(pixel, y);
        position2 = this.increase(pixel, x);
      } else if ( x > 50 && y > 50 ) {
        position1 = this.increase(pixel, y);
        position2 = this.increase(pixel, x);
      } else if ( y > 50 && x <= 50 ) {
        position1 = this.increase(pixel, y);
        position2 = this.decrease(pixel, x);
      }

      const angle = (progress%1000)/(1000/360);

      if ( x <=50 ) {
        if (y <= 50 ) {
          this.setState({
                    ball: {
                      position: 'relative',

                      top: `${position1}px`,
                      left: `${position2}px`,
                      transform: `rotateZ(${angle}deg)`
                    }
                });
        } else {
          this.setState({
                    ball: {
                      position: 'relative',

                      bottom: `${position1}px`,
                      left: `${position2}px`,
                      transform: `rotateZ(${angle}deg)`
                    }
                });
        }
      }

      if ( x>=50 ) {
        if ( y<=50 ) {
          this.setState({
                    ball: {
                      position: 'relative',

                      top: `${position1}px`,
                      right: `${position2}px`,
                      transform: `rotateZ(${angle}deg)`
                    }
                });
        } else {
          this.setState({
                    ball: {
                      position: 'relative',

                      bottom: `${position1}px`,
                      right: `${position2}px`,
                      transform: `rotateZ(${angle}deg)`
                    }
                });
        }
      }

      if (!progress || progress < 4000) {
          this.setState({ cancelId: window.requestAnimationFrame(this.step)});

      } else {

        this.setState({
          start: null,
          flag: true,
          ball: {
            position: 'relative',

            bottom: `0px`
        } });
      }
  }

  render() {
    return (
      <div className='hobbies-block'>
        <p>Soccer: (hit the ball)</p>
        <img onMouseOver={this.onImgOver.bind(this)} style={this.state.ball} id='id' src="./../../img/fb.png" alt=""/>
      </div>
    );
  }
}
