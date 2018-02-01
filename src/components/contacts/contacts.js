import React, { Component } from 'react';
import GoogleMap from './google_map';
import Form from './form';
import axios from 'axios';
import $ from 'jquery';
export default class Contacts extends Component {
  constructor() {
    super();
    this.state = { messageSended: false };
  }
  onFormSubmit(props) {
    axios.post('https://formspree.io/medjitov10@gmail.com', props)
      .then( data => {
        if ( data.status === 200 ) {
          this.setState({ messageSended: true });
          $("#form").fadeOut('fast', () => { $(".form-success").fadeIn('fast'); });
        }
      });
  }


  render() {
    const myLocation = {
      lat: 40.726760,
      lng: -73.862087
    };

    return (
      <div style={{width: '100%', height: '500px'}}>
        <div className="contacts-intro">
          <h3>Contacts</h3>
          <p>Send me e-mail any time you want.</p>
        </div>
        <div className="contacts-body row no-margin">
          <div className="col-lg-6 col-12  no-margin form">
            <div id='form'>
              <Form onFormSubmit={this.onFormSubmit.bind(this)}/>
            </div>
            <div className='form-success alert alert-success'>
              <div className='form-text'>
                <span>
                  Thank you, your message has been successfully submitted.
                </span>
                <i
                  className="fa fa-times fa-lg"
                  aria-hidden="true"
                  onClick={ () => $('.form-success').fadeOut('fast') }
                  ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12  no-margin map-div">
            <div className="col-10 center map">
              <GoogleMap />
            </div>

          </div>

        </div>

      </div>

    );
  }
}
