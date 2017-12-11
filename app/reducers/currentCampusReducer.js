import axios from 'axios';

import {fetchCampuses} from './campusesReducer'

const GOT_CURRENT_CAMPUS = 'GOT_CURRENT_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

//ACTIONS
export const gotCurrentCampus = (currentCampus) => {
  return {
    type: GOT_CURRENT_CAMPUS,
    currentCampus,
  };
};

export const addCurrentCampus = (currentCampus) => {
  return {
    type: ADD_CAMPUS,
    currentCampus
  };
};

export const updateCurrentCampus = (currentCampus) => {
  return {
    type: UPDATE_CAMPUS,
    currentCampus
  };
};

//THUNKS
export const fetchCurrentCampus = (id) => {
  return function(dispatch){
    axios.get(`/api/campuses/${id}`)
      .then( response => response.data)
      .then( (campus) => {
        dispatch(gotCurrentCampus(campus));
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  };
};

export const addCampus = (campus) => {
  return function(dispatch){
    axios.post('/api/campuses', campus)
      .then(response => {
        response.data})
      .then(() => {
        dispatch(fetchCampuses())
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
}

export const updateCampus = (campus) => {
  return function(dispatch){
    axios.put(`/api/campuses/${campus.id}`, campus)
      .then(response => {
        response.data})
      .then(() => {
        dispatch(fetchCampuses())
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
}


//REDUCER
const currentCampusReducer = function(state = {}, action){

  switch (action.type){

    case GOT_CURRENT_CAMPUS:
      return action.currentCampus;

    case ADD_CAMPUS:
      return action.currentCampus;

    case UPDATE_CAMPUS:
      return action.currentCampus;

    default:
      return state;
  }
};

export default currentCampusReducer;
