import React, { Component } from 'react';
import NavBar from './nav_bar/nav_bar.js';
import CurrentItem from './current_item.js';
import FirstLastName from './first_last_name.js';
import TitleJob from './title_job.js';

export default class App extends Component {

  render() {

    return (
      <div className='container-fluid no-margin'>
          <div className='NavBarOsman row no-margin'>
            <div className='osman-img col-xl-4 col-lg-4 no-margin'>
            </div>
            <div className = 'osman-title col-xl-8 col-lg-8 no-margin'>
              <FirstLastName />
              <TitleJob />
              <NavBar />
            </div>

          </div>
        <div className='row no-margin'>
          <div className='col-12  no-margin'>
            <CurrentItem />
          </div>

        </div>
      </div>
    );
  }
}
