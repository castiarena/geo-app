import React from 'react';
import Header from '../components/header/Header';
import Map from '../components/map/Map';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="home-wrapper">
        <Header className="home"/>
        <Map center={{ lat:-34.4208382, lng:-58.5871124 } }/>
      </div>
    );
  }
}

export default Home;