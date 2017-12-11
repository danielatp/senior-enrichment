import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import store, { fetchCurrentCampus, removeStudent } from '../store';

class SingleCampus extends Component{

  componentDidMount(){
    const idInPath = this.props.location.pathname;
    const id = idInPath.split('/')[2];
    this.props.fetchCurrentCampus(id)
  }

  render(props){
    const students = this.props.students
    const campus = this.props.currentCampus;

    return(
      <div style={{backgroundImage: "url("+campus.imageUrl+')'} } >
        <div className="text-op">
          <h1>{campus.name}</h1>
          <div>
          <Link to={`/campuses/${campus.id}/update-campus`}>
          <button className="delete-student-btn">Edit Campus</button>
        </Link>
            {/*<Link to="/campuses">
              <button
                id={campus.id}
                className="delete-student-btn" onClick={(event) => this.props.handleDeleteCampus(this.props.students, event)}>
                Delete Campus
              </button>
    </Link>*/}
          </div>
          <h3>About the campus:</h3>
          <p>{campus.description}</p>
          <br/>
          <h2>Students:</h2>
          <ul className="students-list">
            {students.map( student => {
              return(
                <li key={student.id} id={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {`${student.firstName} ${student.lastName}`}
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

    handleDelete: function(students, event){
      const studentId = event.target.parentNode.id;
      dispatch(removeStudent(students, studentId));
    },

    handleDeleteCampus: function(campuses, event){
      // console.log('EVENT',event.target.id)
      const campusId = event.target.id
      dispatch(removeCampus(campuses, campusId))
    }

  };
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer;
