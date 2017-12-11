import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AllCampuses extends Component {

  render(){
    return (
      <div>
        <h1>Campuses</h1>
        <button>Create Campus</button>
        <div className="campuses-main">
          {this.props.campuses.map( campus => {
            return (
              <div key={campus.id}
                className="campuses-list"
                style={{backgroundImage: "url("+campus.imageUrl+')'}}>
                <Link to={`/campuses/${campus.id}`}>
                <div className="campuses-list">
                  <h2>{campus.name}</h2>
                </div>
                </Link>
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

const AllCampusesContainer = connect(mapStateToProps)(AllCampuses);

export default AllCampusesContainer;
