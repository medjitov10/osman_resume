import React, { Component } from 'react';
import Hobbies from './hobbies';
import AboutDescription from './about_description';
import AboutTitle from './about_title';
// import ReactCursorPosition from 'react-cursor-position';

class AboutMe extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className='row no-margin about-me' >
        <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 no-margin' >
            <AboutTitle />
            <AboutDescription />
        </div>
        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 no-margin'>
          <div >
            <Hobbies/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
