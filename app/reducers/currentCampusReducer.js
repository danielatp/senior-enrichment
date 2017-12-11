import axios from 'axios';

const GOT_CURRENT_CAMPUS = 'GOT_CURRENT_CAMPUS';

//ACTIONS
export const gotCurrentCampus = (currentCampus) => {
  return {
    type: GOT_CURRENT_CAMPUS,
    currentCampus,
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


//REDUCER
const currentCampusReducer = function(state = {}, action){

  switch (action.type){

    case GOT_CURRENT_CAMPUS:
      return action.currentCampus;

    default:
      return state;
  }
};

export default currentCampusReducer;
