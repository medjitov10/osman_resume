import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMap = ({google}) => {

    const myLocation = {
      lat: 40.726760,
      lng: -73.862087
    };

    return (
      <div style={{width: '100%', height: '500px'}}>
        <Map
          google={google}
          zoom={12}
          initialCenter={myLocation}
        >
          <Marker position={myLocation} />
        </Map>
      </div>
    );
};


export default GoogleApiWrapper({
  apiKey: ('AIzaSyD_9ZJ7mrK2I4rNFkamI11U8KiDEoZH9lk')
})(GoogleMap);
