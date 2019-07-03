const initialState = {
  categories: []
}

export default categories = (state = initialState, action) => {
  switch(action.type){
    case 'GET_CATEGORIES_PENDING' :  // loading get data
      return {
        isLoading: true
      }
    case 'GET_CATEGORIES_REJECTED' : // in case network error
      return {
        isLoading: false,
        isError: false
      }
    case 'GET_CATEGORIES_FULFILLED' :  // in case successfully get data
      return {
        categories: action.payload.data.arkanotes.result
      }
    case 'POST_CATEGORIES_FULFILLED' :
      return {
        ...state,
        categories: state.categories.concat(action.payload.data.arkanotes.data)
      }
    default:
      return state
  } 
}