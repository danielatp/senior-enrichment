import React, { Component } from 'react';
import { connect } from 'react-redux';


class AllCampuses extends Component {

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

const AllCampusesContainer = connect(mapStateToProps)(AllCampuses);

export default AllCampusesContainer;
