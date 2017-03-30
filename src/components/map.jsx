import React from 'react';
import GoogleMapsLoader from 'google-maps';
import Locations from '../locations.jsx';

export class GoogleMap extends React.Component {
  
  componentDidMount() {
    GoogleMapsLoader.KEY = 'AIzaSyBr-LzvB67qvsX_PGpmcKAcf3nqeZ8p00o';
    GoogleMapsLoader.load(google => {
      let nyc = {lat: 40.752827, lng: -73.985812};
      let map = new google.maps.Map(document.getElementById('map'), {
        center: nyc,
        zoom: 2
      });
      Locations.coordinates.forEach(coordinate => {
        new google.maps.Marker({
            position: { lat: coordinate.lat, lng: coordinate.long },
            map: map
          });
      });
    });
  }

  render() {
    return (
      <div>
        <div id="map"></div>
      </div>
    )
  }
}

export default GoogleMap;
