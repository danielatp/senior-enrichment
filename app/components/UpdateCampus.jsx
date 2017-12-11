import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CampusForm from './CampusForm';
import store from '../store';

class UpdateCampus extends Component{
  render(props){
    const campus = this.props.currentCampus

    return(
      <div>
        <h1>Update {campus.name}'s</h1>
        <CampusForm match={this.props.match}/>
      </div>
    )
  }
}

function mapStateToProps(storeState, ownProps){
  return{
    currentCampus: storeState.currentCampus,
    match: ownProps.match
  }
}


const UpdateCampusContainer = connect(mapStateToProps)(UpdateCampus);

export default UpdateCampusContainer;
