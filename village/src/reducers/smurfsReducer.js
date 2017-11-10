import {
  GET_SMURFS,
  ADD_SMURF,
  // UPDATE_SMURF,
  // DELETE_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch (action.type) {
    case ADD_SMURF:  
      return action.payload.data;
    case GET_SMURFS: 
     return action.payload.data;
//  case UPDATE_SMURF:;

//  case DELETE_SMURF:;
  
  default:
    return smurfs;
  }
}