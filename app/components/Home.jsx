import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
// import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

export default class Home extends Component{

  render(){
    return (
      <div>
        <NavBar />
        <div className="main-view">
          <Switch>
            <Route path="/students" component={AllStudents} />
            {/*
            <Route path="/" />
            <Route path="/campuses" component={AllCampuses} />
            */}
        </Switch>
      </div>
      </div>
    );
  }

}
