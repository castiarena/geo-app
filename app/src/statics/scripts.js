import React from 'react';
import ReactDOM from 'react-dom';

class ScriptAsync extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const wrapper = ReactDOM.findDOMNode(this);
    const script = document.createElement('script');
    script.src = this.props.src;
    script.addEventListener('load', this.props.onLoad);
    wrapper.appendChild(script);
  }
  
  render(){
    return (
      <div></div>
    );
  }
}

export default ScriptAsync;