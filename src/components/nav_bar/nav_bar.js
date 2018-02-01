import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentItem } from '../../actions/index';

import NavBarItem from './nav_bar_item.js';

class NabBar extends Component {
  constructor(props) {
    super(props);
  }



  render() {


    const items = ['AboutMe', 'Education', 'Portfolio', 'Skills', 'Contacts'];
    const icon = ['fa-user-o', 'fa-book', 'fa-briefcase', 'fa-hand-rock-o', 'fa-envelope-o'];
    const color = ['lightyellow','  #daffe6', '#b0feb0', '#7cd6f2', '#eed9b8'];
    return (
      <div className='NavBar'>
        <ul className='NavBarUl'>
          {
            items.map( (item, i) => (
              <NavBarItem
                item={item}
                key={item}
                icon={icon[i]}
                color={color[i]}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default NabBar;
