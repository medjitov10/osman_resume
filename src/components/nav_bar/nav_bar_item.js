import React, { Component } from 'react';

import { connect } from 'react-redux';
import { currentItem } from '../../actions/index';

class NavBarItem extends Component {
    constructor(props) {
      super(props);
      this.state = { width: screen.width };
      window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
      this.setState({width: document.body.clientWidth});
    }

    onItemClick() {
      this.props.currentItem(this.props.item);
    }


    render() {
      const { CurrentItem, item, color } = this.props;
      const icon = `fa ${this.props.icon}`;
      const liStyle = {

        background: color,
      };



      return (
        <li className='NavBarItem'
          onClick={this.onItemClick.bind(this)} style={liStyle}
          >
            <div className='NavBarItemMargin'>
              <div style={{textAlign: 'center'}} >
                <i className={`${icon} fa-lg`} aria-hidden="true"></i>
              </div>
              <div style={{textAlign: 'center', marginTop: '5px'}}>
                {this.state.width > 766 ? this.props.item : ''}
              </div>
            </div>


        </li>
      );
    }
}
function mapStateToProps(state) {
  return {
    CurrentItem: state.item
  };
}
export default connect(mapStateToProps, {currentItem})(NavBarItem);
