import { 
  REQUEST_RIDE,
  REMOVE_REQUEST,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  PROFILE
  // REQUEST_LOCATION_PENDING,
  // REQUEST_LOCATION_SUCCESS,
  // REQUEST_LOCATION_FAILED
   } from './constants.js';

   export const newRequest = (rider) => ({
    type: REQUEST_RIDE,
    payload: rider
  });

  export const removeRider = (index) => ({
    type: REMOVE_REQUEST,
    payload: index
  });

  export const addArticle = (article) => ({
    type: ADD_ARTICLE,
    payload: article
  })

  export const removeArtice = (index) => ({
    type: REMOVE_ARTICLE,
    payload: index
  })

  export const profile = (user) => {
    return {
        type: PROFILE,
        value: user
    }
}

  // export const requestLocation = () => (dispatch) => {
  //   dispatch({ type: REQUEST_LOCATION_PENDING});
  //   fetch('https://google.com')
  //   .then(response => response.json())
  //   .then(data => dispatch({ type: REQUEST_LOCATION_SUCCESS, payload: data }))
  //   .catch(error => dispatch({ type: REQUEST_LOCATION_FAILED, payload: error }))
  // }