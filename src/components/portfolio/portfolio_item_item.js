import React, {Component} from 'react';

export default class PortfolioItemItem extends Component {

  smallImg() {
    return (
      <div className='small-img'>
        {this.props.Objs.img.map( img => {
          let style = null;
          if ( img === this.props.currentObj.img ) {
            style = {
              backgroundImage: `url('${img}')`,
              border: '2px solid black',
              opacity: '1'
            };
          } else {
            style = {
              backgroundImage: `url('${img}')`,
              opacity: '0.5'
            };
          }
          return <div className='small-img-item' key={img} style={style} onClick={this.props.onImgClick}></div>;
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.smallImg()}
      </div>
    );
  }
}
