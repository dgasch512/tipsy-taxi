import { combineReducers } from 'redux';
import { 
  REQUEST_RIDE,
  REMOVE_REQUEST,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  REQUEST_LOCATION_PENDING,
  REQUEST_LOCATION_SUCCESS,
  REQUEST_LOCATION_FAILED
   } from './constants.js';

   const user = (state = [], action ) => {
    switch(action.type) {
        case 'NEW_USER':
            return state = action.value;
        default:
            return state
    }
}

   const rides = (state= [], action) => {
     switch(action.type) {
       case REQUEST_RIDE:
         return [...state, action.value]
        case REMOVE_REQUEST:
          const thisRide = [ ...state ]
          thisRide.splice(action.payload, 1)
          return {rides: [...state.rides, thisRide]}
        default: 
          return state
     }
   }

   const stories = (state= [], action) => {
    switch(action.type) {
      case ADD_ARTICLE:
        return [...state, action.value]
       case REMOVE_ARTICLE:
         const stories = [ ...state ]
         stories.splice(action.value, 1)
         return stories
       default: 
         return state
    }
  }

  const requestLocation = (state=[], action) => {
    switch(action.type) {
      case REQUEST_LOCATION_PENDING:
        return Object.assign({}, state, { isPending: true });
      case REQUEST_LOCATION_SUCCESS:
        return Object.assign({}, state, { location: action.payload, isPending: false });
      case REQUEST_LOCATION_FAILED:
        return Object.assign({}, state, { error: action.payload, isPending: false });
      default: 
        return state;
    }
  }

  export default combineReducers({ rides, stories, user, requestLocation });