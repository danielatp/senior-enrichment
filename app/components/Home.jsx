import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import HomeView from './HomeView';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleStudent from './SingleStudent';
import StudentForm from './StudentForm';
import UpdateStudent from './UpdateStudent';
import SingleCampus from './SingleCampus';
import CampusForm from './CampusForm';
import UpdateCampus from './UpdateCampus';
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
            <Route exact path="/" component={HomeView} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/student-form" component={StudentForm} />
            <Route exact path="/students/:studentsId" component={SingleStudent} />
            <Route path="/students/:studentsId/update-student" component={UpdateStudent} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/campus-form" component={CampusForm} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/campuses/:campusId/update-campus" component={UpdateCampus} />
        </Switch>
      </div>
      </div>
    );
  }

}


function maStateToProps(storeState){
  return {
    students: storeState.students,
    campuses: storeState.campuses,
    currentStudent: storeState.currentStudent
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    fetchCampuses: () => dispatch(fetchCampuses()),
  };
}

const HomeContainer = withRouter(connect(null, mapDispatchToProps)(Home));

export default HomeContainer;
