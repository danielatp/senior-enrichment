import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { addStudent } from '../store'

class StudentForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campus: ''
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGpaChange = this.handleGpaChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
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
      campus: event.target.value.toUpperCase(),
    })
  }


  handleSubmit(event){
    event.preventDefault()
    const studentData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gpa: this.state.gpa,
      campus: this.state.campusName
    }
    this.props.addStudent(studentData)
  }


  render(props){

    return(
      <div>
        <h1>Student Form</h1>
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
                <option key={campus.id}>{campus.name}</option>
              )
            })}
          </select>

            <button type="submit" className="form-input" >add</button>

        </form>
      </div>
    );
  }
}


function mapStateToProps(storeState){
  return{
    campuses: storeState.campuses,
    students: storeState.students
  }
}

function mapDispatchToProps(dispatch){
  return {
    addStudent: (student) => dispatch(addStudent(student))
  };
}

const StudentFormContainer = connect(mapStateToProps, mapDispatchToProps)(StudentForm);

export default StudentFormContainer;
