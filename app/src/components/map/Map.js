import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import style from './map.css';
import ScriptsAsync from '../../statics/scripts';
import googleMapsConfiguration from './google-maps-configuration';

class Map extends Component {
  constructor(props){
    super(props);
    this.gmap = null;
  }

  googleLoaded(){
    console.log(this.props.center);
    this.gmap = new google.maps.Map(
      ReactDOM.findDOMNode(this),
      googleMapsConfiguration({
        center: this.props.center,
        zoom: this.props.zoom,
      })
    );

    this._loadListenerMap = google.maps.event
      .addListener(this.gmap,
        'bounds_changed',
        this.handleOnLoad.bind(this)
      );
    
  }

  handleOnLoad(){
    this.props.onLoad(this.gmap);
    google.maps.event.removeListener(this._loadListenerMap);    
  }

  render(){
    return (
      <section className={style["map-full"]}>
        <ScriptsAsync 
          src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyBkrr9-L5-P5I0XTqsb6uJD_eHvfvVZ2UA" 
          onLoad={this.googleLoaded.bind(this)}/>
      </section>
    );
  }
}

Map.defaultProps = {
  zoom: 14,
  onLoad: () => {}
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  zoom: PropTypes.number,
  onLoad: PropTypes.func
};

export default Map;