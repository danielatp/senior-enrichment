import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import store, { removeCampus } from '../store';

class AllCampuses extends Component {

  render(){
    return (
      <div>
        <h1>Campuses</h1>
        <Link to="/campuses/campus-form">Add Campus</Link>
        <div className="campuses-main">
          {this.props.campuses.map( campus => {
            return (
              <div key={campus.id}
                className="campuses-list"
                style={{backgroundColor: "black", backgroundImage: "url("+campus.imageUrl+')'}}>
                <Link to={`/campuses/${campus.id}`}>
                <div className="campuses-list">
                  <h2>{campus.name}</h2>
                </div>
                </Link>
                <button
                  className="delete-campus-btn"
                  id={campus.id}
                  onClick={(event) => this.props.handleDelete(this.props.students, event)}>Delete Campus
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(storeState){
  return {
    campuses: storeState.campuses
  };
}

function mapDispatchToProps(dispatch){
  return {

    handleDelete: function(campuses, event){
      const campusId = event.target.id;
      dispatch(removeCampus(campuses, campusId));
    }
  };
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default AllCampusesContainer;
