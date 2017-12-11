import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { addCampus, updateCampus } from '../store';

class CampusForm extends Component{

  constructor(props){
    super(props);

    const campusExists = this.props.match.path !== '/campuses/campus-form';

    if(campusExists){
      const c = this.props.currentCampus

      this.state = {
        name: c.name || '',
        description: c.description || '',
        imageUrl: c.imageUrl || ''
      }
    }else{
      this.state = {
        name: '',
        description: '',
        imageUrl: ''
      }
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value.toUpperCase(),
    })
  }
  handleDescriptionChange(event){
    this.setState({
      description: event.target.value,
    })
  }
  handleImageUrlChange(event){
    this.setState({
      imageUrl: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('STATE', this.state)
    const campusData = {
      name: this.state.name,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    }
    console.log('campusData', campusData)

    const campusExists = this.props.match.path !== '/campuses/campus-form';

    if(campusExists){
      campusData.id =this.props.currentCampus.id
      this.props.updateCampus(campusData)
    }else{
      this.props.addCampus(campusData)
    }

  }


  render(props){
    if(this.props.match){
      return(
        <div>
          <h2>Campus Info</h2>
          <form onSubmit = {this.handleSubmit}>
            <input
              type="text"
              placeholder="Campus Name"
              className="form-input"
              name="campusName"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
            <input
              type="text"
              placeholder="Enter campus description..."
              className="form-input"
              name="campusDescription"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
            <input
              type="text"
              placeholder="Enter URL for campus image..."
              className="form-input"
              name="campusImage"
              onChange={this.handleImageUrlChange}
              value={this.state.imageUrl}
            />
            {this.props.match.path === "/campuses/campus-form"
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
    // students: storeState.students,
    currentCampus: storeState.currentCampus,
    match: ownProps.match
  }
}

function mapDispatchToProps(dispatch){
  return {
    addCampus: (campus) => dispatch(addCampus(campus)),

    updateCampus: (campus) => dispatch(updateCampus(campus))
  };
}



const CampusFormContainer = connect(mapStateToProps, mapDispatchToProps)(CampusForm);

export default CampusFormContainer;
