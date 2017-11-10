import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";


//let rootURL = 'http://localhost:3333/';

const rootURL = './';
let dir00 = 'smurfs';
export const getSmurfs = () => {  
  //const promise = axios.get(rootURL + dir00);
  const promise = axios.get('http://localhost:3333/smurfs'); 
  return {
    type: GET_SMURFS,
    payload: promise
  }
}

export const addSmurf = (smurf) => {
//  const promise = axios.post(rootURL + dir00);
const promise = axios.post('http://localhost:3333/smurfs', smurf);
  return {
    type: ADD_SMURF,
    payload: promise
   }
}

export const updateSmurf = (smurf) => {
  const promise = axios.put(rootURL + dir00, smurf);
  return {
    type: UPDATE_SMURF,
    payload: promise
  }   
}

export const deleteSmurf = (smurf) => {
  const promise = axios.delete(rootURL + dir00);
  return {
    type: DELETE_SMURF,
    payload: promise
  }   
  .then(getSmurfs);
  
}
/*
import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

const endpoint = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(endpoint);
  return {
    type: GET_SMURFS,
    payload: smurfs,
  }
}

export const addSmurf = (smurf) => {
  const retValue = axios.post(endpoint, smurf)
    .catch(value => {
      console.log(value.request.status);
      return axios.put(endpoint, smurf);
    });
    console.log(retValue);
  return {
    type: ADD_SMURF,
    payload: retValue,
  }
}

export const deleteSmurf = (id) => {
  return axios.delete(endpoint, { data: { id }})
    .then(getSmurfs);
}
*/