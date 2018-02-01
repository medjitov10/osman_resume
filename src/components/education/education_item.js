import React, { Component } from 'react';

class EducationItem extends Component {

    constructor() {
      super();
      this.state = {
        data: { background: '' },
        arrow: {
          transform: 'rotateZ(180deg)',
        }
      };
    }

    onBlockOver() {

        if (this.props.side === 'left') {
          this.setState({
            data: { background: '#f12f2f'},
            arrow: {
              transform: 'rotateZ(225deg)',
              background: "url('../../../img/arrowRed.png') center center no-repeat",
              backgroundSize: '100%'
            }
          });
        } else {
          this.setState({
            data: { background: '#f12f2f'},
            arrow: {
              transform: 'rotateZ(135deg)',
              background: "url('../../../img/arrowRed.png') center center no-repeat",
              backgroundSize: '100%'
            }
          });
        }

    }

    onBlockLeave() {
      this.setState({
        data: { background: '#303030'},
        arrow: {
          transform: 'rotateZ(180deg)',
        }
      });
    }

    renderBlock() {
      if ( this.props.side === 'left' ) {
        return (
          <div className='time-pointer-left' style={this.state.arrow}>
          </div>
        );
      } else {
        return (
          <div  className='time-pointer-right' style={this.state.arrow}>

          </div>
        );
      }
    }

    render() {
      const { side, imgURL, text, data, name, title, description } = this.props;

      const halfBlockStyle = { float: `${side}` };

      return (
        <div
          className='education-block no-margin'
          onMouseOver={this.onBlockOver.bind(this)}
          onMouseLeave={this.onBlockLeave.bind(this)}
        >
          <div className='education-block-half' style={halfBlockStyle}>

            <div className='education-info-block'>
              <div className="education-img" style={{ background: `url(${imgURL}) center center no-repeat`, backgroundSize: 'cover'}}>
                <div className='education-info-data' style={this.state.data}>{data}
                </div>
              </div>
              <div className='education-info'>
                <div className='education-info-name'>{name}</div>
                <div className='education-info-title'>{title}</div>
                <div className='education-info-description'>{description}</div>
              </div>

            </div>

          </div>
        {this.renderBlock()}
        </div>
      );
    }
}


export default EducationItem;
