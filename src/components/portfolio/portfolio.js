import React, { Component } from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends Component {

  constructor() {
    super();

    this.state = {
      obj: [
        {
          img: '../../../img/to_do_list.png',
          git: 'https://github.com/medjitov10/to_list_2000/',
          url: 'https://to-do-list-2000.herokuapp.com/'
        },
        {
          img: '../../../img/osmagramm.png',
          git: 'https://github.com/medjitov10/osmagramm',
          url: 'https://osmagramm.herokuapp.com/'
        },
        {
          img: '../../../img/cotd.png',
          git: 'https://github.com/medjitov10/catch-of-the-day/',
          url: 'https://ns-wceoyfuumi.now.sh/'
        }
      ],

      i: 0
    };
  }

  onLeftClick() {
    this.setState({ i: ( (this.state.i - 1) + this.state.obj.length ) % this.state.obj.length });
  }
  onRightClick() {
    this.setState({ i: ( this.state.i + 1 ) % this.state.obj.length });
  }
  onIconClick(index) {
    this.setState({ i: index});
  }

  render() {
    const { i, obj } = this.state;

    const currentObj = obj[i];


    return (
      <div className='portfolio'>
        <div>
          <h3 className='portfolio-intro'>My main works for the moment</h3>
        </div>
        <PortfolioItem
          Objs = {obj}
          currentObj={currentObj}
          onRightClick={this.onRightClick.bind(this)}
          onLeftClick={this.onLeftClick.bind(this)}
          onIconClick={this.onIconClick.bind(this)}/>

      </div>
    );
  }
}

export default Portfolio;
