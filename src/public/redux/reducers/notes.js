const initialState = {
  notes: [],
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
        notes: action.payload.data.arkanotes.result
      }
    case 'SEARCH_NOTES_FULFILLED' :
      return {
        ...state,
        notes: action.payload.data.arkanotes.result
      }
    case 'POST_NOTES_FULFILLED' :
      return {
        ...state,
        notes: [action.payload.data.arkanotes.data].concat(state.notes)
      }
    case 'DELETE_NOTES_FULFILLED' :
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.data.arkanotes.data.id)
      }
    case 'PATCH_NOTES_FULFILLED' :
      return {
        ...state,
        notes: state.notes.map(note => 
                (note.id == action.payload.data.arkanotes.data.id) ? 
                action.payload.data.arkanotes.data : note
        )
      }
    
    default:
      return state
  } 
}