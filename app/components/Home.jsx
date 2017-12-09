import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleStudent from './SingleStudent';
import { fetchStudents, fetchCampuses } from '../store';


class Home extends Component{

  componentDidMount(){
    this.props.fetchStudents();
    this.props.fetchCampuses();
  }

  render(props){
    return (
      <div>
        <NavBar />
        <div className="main-view">
          <Switch>
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route path="/students/:studentsId" component={SingleStudent} />
        </Switch>
      </div>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return {
    fetchStudents: () => dispatch(fetchStudents()),

    fetchCampuses: () => dispatch(fetchCampuses()),
  };
}

const HomeContainer = withRouter(connect(null, mapDispatchToProps)(Home));

export default HomeContainer;
