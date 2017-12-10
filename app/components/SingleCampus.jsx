import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleCampus extends Component{

  render(){
    return(
      <div>
        <h1>Single Campus</h1>
      </div>
    );
  }
}

function mapStateToProps(storeState){
  return {
    campuses:storeState.campuses
  }
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus)

export default SingleCampusContainer;
