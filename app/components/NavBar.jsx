import React, {Component} from 'react';
import Home from './Home';

export default class NavBar extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <nav>
          <div>
            <p>home</p>
          </div>
          <div>
            <p>campuses</p>
          </div>
          <div>
            <p>students</p>
          </div>
        </nav>
        <Home />
      </div>
    )
  }

}
