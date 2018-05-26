import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';


export default class NavBar extends Component{

  render(){
    return (
      <div>
        <nav className="text-op">
          <div className="home"><Link to="/"> HOME </Link></div>
          <div><Link to="/students"> Students </Link></div>
          <div><Link to="/campuses"> Campuses </Link></div>
        </nav>
      </div>
    )
  }

}


