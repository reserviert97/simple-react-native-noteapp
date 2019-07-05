const initialState = {
  data: [],
  totalPage: 0,
  isLoading: false,
  isError: false
}

// create a reducer
export default notes = (state = initialState, action) => {
  switch(action.type){
    case 'GET_NOTES_PENDING' :  // loading get data
      return {
        isLoading: true
      }
    case 'GET_NOTES_REJECTED' : // in case network error
      return {
        isLoading: false,
        isError: false
      }
    case 'GET_NOTES_FULFILLED' :  // in case successfully get data
      return {
        ...state,
        data: action.payload.data.arkanotes.result,
        totalPage: action.payload.data.arkanotes.query.totalPage,
        isLoading: false
      }
    case 'GET_NOTES_PERPAGE_FULFILLED' :  // in case successfully get data
      return {
        ...state,
        data: state.data.concat(action.payload.data.arkanotes.result),
        totalPage: action.payload.data.arkanotes.query.totalPage
      }
    case 'SEARCH_NOTES_FULFILLED' :
      return {
        ...state,
        data: action.payload.data.arkanotes.result
      }
    case 'SORT_NOTES_FULFILLED' :
      return {
        ...state,
        data: action.payload.data.arkanotes.result
      }
    case 'POST_NOTES_FULFILLED' :
      return {
        ...state,
        data: [action.payload.data.arkanotes.data].concat(state.data)
      }
    case 'DELETE_NOTES_FULFILLED' :
      return {
        ...state,
        data: state.data.filter(note => note.id !== action.payload.data.arkanotes.data.id)
      }
    case 'PATCH_NOTES_FULFILLED' :
      return {
        ...state,
        data: state.data.map(note => 
                (note.id == action.payload.data.arkanotes.data.id) ? 
                action.payload.data.arkanotes.data : note
        )
      }
    
    default:
      return state
  } 
}