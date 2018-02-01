import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutMe from './about_me/about_me';
import Skills from './skills/skills';
import Portfolio from './portfolio/portfolio';
import Education from './education/education';
import Contacts from './contacts/contacts';

class CurrentItem extends Component {

  current() {
    switch (this.props.item) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Skills':
        return <Skills />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Education':
        return <Education />;
      case 'Contacts':
        return <Contacts />;
    }
  }

  render() {
    return (
      <div style={{ marginBottom: '25px'}}>
        {this.current()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item
  };
}

export default connect(mapStateToProps)(CurrentItem);
