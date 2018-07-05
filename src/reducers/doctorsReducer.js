import { RECEIVE_DOCTORS } from '../actions/doctorsActions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOCTORS:
      return Object.assign({}, action.doctors);
    default:
      return state;
  }
};