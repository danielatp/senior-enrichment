import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrentStudent } from '../store';

class SingleStudent extends Component{

  componentDidMount(){
    const idInPath = this.props.location.pathname;
    const id = idInPath.split('/')[2]; //IS STRING
    this.props.fetchCurrentStudent(id);
  }

  render(){
    const student = this.props.currentStudent;

    return (
      <div>
        <h1>{`${student.firstName} ${student.lastName}`}</h1><br/>
        <h3>E-mail</h3><h4>{student.email}</h4><br/>
        <h3>Campus</h3><h4>el nombre el campussss</h4><br/>
        <h3>GPA</h3><h4>{student.gpa}</h4><br/>
      </div>
    );
  }

}

function mapStateToProps(storeState){
  return {
    currentStudent: storeState.currentStudent
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchCurrentStudent: function(id){
      dispatch(fetchCurrentStudent(id))
    }
  };
}

const SingleStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentsContainer;
