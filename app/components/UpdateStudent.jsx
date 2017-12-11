import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StudentForm from './StudentForm';
import store from '../store';

class UpdateStudent extends Component{
  render(props){
    const student = this.props.currentStudent

    return(
      <div>
        <h1>Update {student.firstName}'s</h1>
        <StudentForm match={this.props.match}/>
      </div>
    )
  }
}

function mapStateToProps(storeState, ownProps){
  return{
    currentStudent: storeState.currentStudent,
    match: ownProps.match
  }
}


const UpdateStudentContainer = connect(mapStateToProps)(UpdateStudent);

export default UpdateStudentContainer;
