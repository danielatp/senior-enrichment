import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link , Route} from 'react-router-dom';

import store, { fetchCurrentStudent, removeStudent } from '../store';
import UpdateStudent from './UpdateStudent'

class SingleStudent extends Component{

  componentDidMount(){
    const idInPath = this.props.location.pathname;
    const id = idInPath.split('/')[2];
    this.props.fetchCurrentStudent(id)
  }

  render(){
    const student = this.props.currentStudent;
    const campus = this.props.currentCampus;

    return (
      <div>
        <h1>{`${student.firstName} ${student.lastName}`}</h1>
        <div>
          <Link to={`/students/${student.id}/update-student`}>
            <button className="delete-student-btn">Edit Student</button>
          </Link>
          {/*<Link to="/students">
            <button className="delete-student-btn" onClick={(event) => this.props.handleDelete(this.props.students, event)}>Delete Student</button>
    </Link>*/}
        </div>
        <h3>E-mail</h3><h4>{student.email}</h4>
        <br/>
        <h3>Campus</h3><h4>{campus ? campus.name : 'No Campus Assigned'}</h4>
        <br/>
        <h3>GPA</h3><h4>{student.gpa}</h4>
        <br/>
      </div>
    );
  }
}

function mapStateToProps(storeState){
  return {
    currentStudent: storeState.currentStudent,
    currentCampus: storeState.campuses.filter( campus => {
      return campus.id === storeState.currentStudent.campusId
    })[0]
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchCurrentStudent: function(id){
      dispatch(fetchCurrentStudent(id));
    },

    handleDelete: function(students, event){
      const id = this.currentStudent.id;
      dispatch(removeStudent(students, id));
    }

  };
}

const SingleStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentsContainer;
