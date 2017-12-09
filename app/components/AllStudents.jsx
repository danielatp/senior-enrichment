import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeStudent } from '../store';

class AllStudents extends Component {

  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Students</h1>
        <button>Add Student</button>
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
    // fetchStudents: function(){
    //   dispatch(fetchStudents());
    // },
    handleDelete: function(students, event){
      const studentId = event.target.parentNode.id;
      dispatch(removeStudent(students, studentId));
    }
  };
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);

export default AllStudentsContainer;
