import React from 'react';
import ReactDOM from 'react-dom';
import style from './map.css';
import ScriptsAsync from '../../statics/scripts';
import googleMapsConfiguration from './google-maps-configuration';

class Map extends React.Component {
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
        zoom: 12,
      })
    );
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

export default Map;