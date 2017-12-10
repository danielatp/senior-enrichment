import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeStudent } from '../store';

class AllStudents extends Component {

  render(){
    return (
      <div>
        <h1>Students</h1>
        <Link to="/students/student-form">Add Student</Link>
        <ul className="students-list">
          {this.props.students.map( student => {return (
                  <li key={student.id} id={student.id}>
                    <Link to={'/students/' + student.id}>
                      {student.firstName}
                    </Link>
                    <button
                      className="delete-student-btn"
                      onClick={(event) => this.props.handleDelete(this.props.students, event)}> X
                    </button>
                  </li>
              );
            })}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(storeState){
  return {
    students: storeState.students
  };
}

function mapDispatchToProps(dispatch){
  return {

    handleDelete: function(students, event){
      const studentId = event.target.parentNode.id;
      dispatch(removeStudent(students, studentId));
    }
  };
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);

export default AllStudentsContainer;
