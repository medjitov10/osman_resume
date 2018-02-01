import React, { Component } from 'react';
import SkillsIntro from './skills-intro';
import SkillsItem from './skills-item';
import SkillsLanguage from './skills-language';

class Skills extends Component {

  constructor() {
    super();
    this.state = { percent: 5};
  }

  render() {
    return (
      <div className='skills'>
        <div className='skills-intro'>
          <SkillsIntro />
        </div>

        <div className='skills-charts'>
          <div className="container-fluid">
            <div className="row">
              <div className="row col-lg-12 col-md-12 col-12 skills-div no-margin">

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <SkillsItem
                    percent={68}
                    name='HTML'
                    color='rgb(247, 159, 101)'
                  />
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <SkillsItem
                    percent={65}
                    name='CSS'
                    color='rgb(103, 151, 247)'
                  />
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <SkillsItem
                    percent={75}
                    name='JS(REACT)'
                    color='rgb(68, 183, 255)'
                  />
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <SkillsItem
                    percent={65}
                    name='RUBY ON RAILS'
                    color='rgb(153, 24, 30)'
                  />
                </div>

              </div>
              <div className="col-lg-12 col-md-12 col-12 skill-language">
                <SkillsLanguage />
              </div>

            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Skills;
