import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCampuses } from '../reducers/campusesReducer';

class AllCampuses extends Component {

  componentDidMount(){
    this.props.fetchCampuses();
  }

  render(){
    return (
      <div>
        <h1>Campuses</h1>
        <button>Create Campus</button>
        <div className="campuses-main">
          {this.props.campuses.map( campus => {
            return (
              <div
                key={campus.id}
                className="campuses-list"
                style={{backgroundImage: "url("+campus.imageUrl+')'}}>
                <h2>{campus.name}</h2>
                <button className="delete-campus-btn">delete campus</button>
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
    fetchCampuses: function(){
      dispatch(fetchCampuses());
    }
  };
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default AllCampusesContainer;
