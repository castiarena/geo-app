import React from 'react';
import style from './header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const headerClassName = [
      style.header, this.props.className
    ].join(' ');
    return (
      <header className={headerClassName}>
        <h1> Apill place and region marker </h1>
      </header>
    );
  }
}

export default Header;