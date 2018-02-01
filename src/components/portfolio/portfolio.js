import React, { Component } from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends Component {

  constructor() {
    super();

    this.state = {
      arrImg: ['../../../img/to_do_list.png', '../../../img/cotd.png'],
      arrGit: ['https://github.com/medjitov10/to_list_2000/', 'https://github.com/medjitov10/catch-of-the-day/'],
      url: ['https://to-do-list-2000.herokuapp.com/','https://ns-wceoyfuumi.now.sh/'],
      i: 0
    };
  }

  onButtonClick() {
    this.setState({ i: ( this.state.i + 1 ) % this.state.arrImg.length });
  }

  render() {
    const { arrImg, arrGit, url, i } = this.state;
    const Objs = {
      img: arrImg,
      git: arrGit,
      url: url,
    };
    const currentObj = {
      img: arrImg[i],
      git: arrGit[i],
      url: url[i],
    };


    return (
      <div className='portfolio'>
        <div>
          <h3 className='portfolio-intro'>My main works for the moment</h3>
        </div>
        <PortfolioItem
          Objs = {Objs}
          currentObj={currentObj}
          onButtonClick={this.onButtonClick.bind(this)}/>

      </div>
    );
  }
}

export default Portfolio;
