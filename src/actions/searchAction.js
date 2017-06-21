import actionTypes from './actionTypes';
import setLoading from './LoadingAction';

export default (query) => {
  return (dispatch) => {
     // notifies the component that the page is loading
    setLoading.isLoading(dispatch, actionTypes);
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    // here we used fetch to make an ajax call to the google api
    // fetch is an inbuilt es6 method for making ajax request.
    // we can also use external libraries such as **axios** and **request**
    fetch(`${BASE_URL}${query}`, { method: 'GET'})
      .then(response => response.json())
      .then(json => {
        // notifies the component that the page is has finish loading
         setLoading.isNotLoading(dispatch,actionTypes);
         let { items } = json;
         // dispatches the SEARCH_SUCCESSFUL action with the new items that was 
         dispatch({
           type: actionTypes.SEARCH_SUCCESSFUL,
           items,
           status: 'success'
         });
       })
      .catch((err) => {
        // notifies the component that the page has finish loading
         setLoading.isNotLoading(dispatch,actionTypes);
          // dispatches the SEARCH_UNSUCCESSFUL action with the error message
         dispatch({
           type: actionTypes.SEARCH_UNSUCCESSFUL,
           status: 'failed',
           error: err.message
         });
      });
   };
};