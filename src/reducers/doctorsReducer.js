import { 
  RECEIVE_DOCTORS,
  RECEIVE_DOCTOR } from '../actions/doctorsActions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOCTORS:
      return Object.assign({}, action.doctors);
    case RECEIVE_DOCTOR:
      return Object.assign({}, action.doctor);
    default:
      return state;
  }
};