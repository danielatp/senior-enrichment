import axios from 'axios';

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';


//ACTIONS
export const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses
  };
};

export const deleteCampus = (id) => {
  return {
    type: DELETE_CAMPUS,
    id,
  };
};


//THUNKS
export const fetchCampuses = () => {
  return function(dispatch){
    axios.get('/api/campuses')
    .then( response => response.data)
    .then( campuses => {
      dispatch(gotCampuses(campuses));
    })
    .catch(err => {
      console.log('FRIENDLY ERROR: ', err );
    });
  };
};

export const removeCampus = (campuses, id) => {
  return function(dispatch){
    axios.delete(`/api/campuses/${id}`)
    .then( () => {
      dispatch(deleteCampus(id));
      dispatch(gotCampuses(campuses));
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
};

//REDUCER
const campusesReducer = function(state = [], action){

  switch (action.type){
    case GOT_CAMPUSES:
      return action.campuses;

      case DELETE_CAMPUS:
      return state.filter(campus => {
        return campus.id !== Number(action.id);
      });

    default:
      return state;
  }
};

export default campusesReducer;

