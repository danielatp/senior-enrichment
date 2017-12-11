import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import store, { fetchCurrentCampus } from '../store';
import AllStudents from './AllStudents'

class SingleCampus extends Component{

  componentDidMount(){
    const idInPath = this.props.location.pathname;
    const id = idInPath.split('/')[2];
    console.log('ID', id)
    this.props.fetchCurrentCampus(id)
  }

  render(props){
    const students = this.props.students
    const campus = this.props.currentCampus;

    return(
      <div style={{backgroundImage: "url("+campus.imageUrl+')'}}>
        <h1>{campus.name}</h1>
        <div>
          <button>Edit Campus</button>
          <button>Delete Campus</button>
        </div>
        <h3>About the campus:</h3>
        <p>{campus.description}</p>
        <br/>
        <h2>Students:</h2>
        <ul className="students-list">
          {students.map( student => {
            return(
              <li key={student.id}>{`${student.firstName} ${student.lastName}`}</li>
            );
          })}
        </ul>


      </div>
    );
  }
}

function mapStateToProps(storeState){
  return {
    currentCampus: storeState.currentCampus,
    students: storeState.students.filter( student => {
      return student.campusId == storeState.currentCampus.id
    })
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCurrentCampus: function(id){
      dispatch(fetchCurrentCampus(id));
    },

  };
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer;
