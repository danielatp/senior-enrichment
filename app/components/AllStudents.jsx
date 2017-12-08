import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents } from '../reducers/studentsReducer';

class AllStudents extends Component {

  componentDidMount(){
    this.props.fetchStudents();
  }

  render(){
    console.log('PROPS: ', this.props)
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {this.props.students.map( student => {return (
                <li key={student.id}>
                  {student.firstName}
                  <button className="delete-btn">X</button>
                </li>
              );
            })}
          </ul>
      </div>
    );
  }
}


function mapStateToProps (storeState){
  return {
    students: storeState.students
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchStudents: function(){
      dispatch(fetchStudents());
    }
  };
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);

export default AllStudentsContainer;
