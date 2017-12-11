import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { addStudent, updateStudent } from '../store'

class StudentForm extends Component{

  constructor(props){
    super(props);

    const studentExists = this.props.match.path !== '/students/student-form';

    if(studentExists){
      const s = this.props.currentStudent

      this.state = {
        firstName: s.firstName || '',
        lastName: s.lastName || '',
        email: s.email || '',
        gpa: s.gpa || '',
        campusId: s.campusId || ''
      }
    }else{
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: '',
        campusId: ''
      }
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGpaChange = this.handleGpaChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event){
    this.setState({
      firstName: event.target.value.toUpperCase(),
    })
  }
  handleLastNameChange(event){
    this.setState({
      lastName: event.target.value.toUpperCase(),
    })
  }
  handleEmailChange(event){
    this.setState({
      email: event.target.value.toUpperCase(),
    })
  }
  handleGpaChange(event){
    this.setState({
      gpa: event.target.value,
    })
  }
  handleCampusChange(event){
    this.setState({
      campusId: event.target.value,
    })
  }


  handleSubmit(event){
    event.preventDefault()

    const studentData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gpa: this.state.gpa,
      campusId: this.state.campusId
    }

    const studentExists = this.props.match.path !== '/students/student-form';

    if(studentExists){
      studentData.id =this.props.currentStudent.id
      this.props.updateStudent(studentData)
    }else{
      this.props.addStudent(studentData)
    }

  }


  render(props){
    if(this.props.match){
      return(
        <div>
          <h2>Student Info</h2>
          <form onSubmit = {this.handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
              onChange={this.handleFirstNameChange}
              name="firstName"
              value={this.state.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-input"
              onChange={this.handleLastNameChange}
              name="lastName"
              value={this.state.lastName}
            />
            <input
              type="email"
              placeholder="student@email.com"
              className="form-input"
              onChange={this.handleEmailChange}
              name="email"
              value={this.state.email}
            />
            <input
              type="number"
              placeholder="GPA"
              className="form-input"
              onChange={this.handleGpaChange}
              name="gpa"
              value={this.state.gpa}
            />
            <select className="form-input" name="campusName" onChange={this.handleCampusChange}>
              <option default>-campus-</option>
              {this.props.campuses.map( campus => {
                return(
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                )
              })}
            </select>
              {this.props.match.path === "/students/student-form"
                ?
                <button
                  type="submit"
                  className="form-input"
                  name="add"
                  value="add">ADD
                </button>
                :
                <button
                  type="submit" className="form-input"
                  name="update"
                  value="update">UPDATE
                </button>}
          </form>
        </div>
      );
    }else{
      return (<div>I forgot what I was saying, please start again :((</div>)
    }
  }
}


function mapStateToProps(storeState, ownProps){
  return{
    campuses: storeState.campuses,
    students: storeState.students,
    currentStudent: storeState.currentStudent,
    match: ownProps.match
  }
}

function mapDispatchToProps(dispatch){
  return {
    addStudent: (student) => dispatch(addStudent(student)),

    updateStudent: (student) => dispatch(updateStudent(student))
  };
}

const StudentFormContainer = connect(mapStateToProps, mapDispatchToProps)(StudentForm);

export default StudentFormContainer;
