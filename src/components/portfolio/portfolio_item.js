import React, { Component } from 'react';
import PortfolioItemItem from './portfolio_item_item';
import $ from 'jquery';

export default class PortfolioItem extends Component {

  constructor() {
    super();
    this.state = {
      detail:  {},
      detailClick: false,
      flag: true
    };
  }


  onDetailClick(e) {
    const x = e.clientX - $('.portfolio-item').offset().left;
    const y = e.clientY - $('.portfolio-item').offset().top + $(window).scrollTop();
    const limitRight = $('.portfolio-item').width() - $('.portfolio-right').width();
    const limitTop = $('.portfolio-item').height() - $('.small-img').height() - 20;

    let detailX = null;
    let detailY = null;
    if ( this.state.flag ) {
      this.setState({ flag: false });
      detailY = -100;
      detailX = -100;
    } else {
      detailY = $('.detail').offset().top + $(window).scrollTop() + $('.detail').height() -  $('.portfolio-item').offset().top;
      detailX = $('.detail').offset().left + $('.detail').height() -$('.portfolio-item').offset().left;
    }
    if ( y < detailY-100 || y > detailY || x < detailX-100 || x < detailY ) {
      if ( x > $('.portfolio-right').width() && x < limitRight && y < limitTop ) {
        this.setState({
          detail: {
            position: 'absolute',
            display: 'flex',
            top: y,
            left: x,
            background: 'rgb(255, 255, 255)',
            width: '200px',
            height: '100px'
          }
        });
      } else {
        this.setState({ detail: { display: 'none' }});
      }
    }
  }



  render() {
    const { currentObj, onButtonClick, Objs } = this.props;

    return (
      <div onClick={ this.onDetailClick.bind(this) } className='portfolio-item' style={{
        backgroundImage: `url('${currentObj.img}')`}}>
        <div onClick={ onButtonClick} className='portfolio-left'>
          <i className="fa fa-chevron-circle-left fa-lg" aria-hidden="true"></i>
        </div>
        <div onClick={ onButtonClick}  className='portfolio-right'>
          <i className="fa fa-chevron-circle-right fa-lg" aria-hidden="true"></i>
        </div>

        <div style={this.state.detail} className='detail'>
          <div className='detail-item-git detail-item'>
            <a href={currentObj.git} target='_blank'>
            </a>
          </div>
          <div className='detail-item-live detail-item'>
            <a href={currentObj.url} target='_blank'>
            </a>
          </div>
          <div onClick={ () => this.setState({ detail: { display: 'none'}})}>
            <i className="fa fa-times fa-lg"></i>
          </div>
        </div>

        <PortfolioItemItem Objs={Objs} currentObj={currentObj} onImgClick={onButtonClick} />
      </div>
    );
  }
}
