import * as actionTypes from '../Actions/actionTypes'

const initialState = {
  currentPath: '/',
}

const message = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.PATH_CHANGE_REQUEST:
      return {
        ...state,
        currentPath: action.payload.currentPath,
      }
    case actionTypes.PATH_CHANGE_SUCCESS:
      return {
        ...state,
        currentPath: action.payload.currentPath,
      }
    case actionTypes.PATH_CHANGE_FAILURE:
      return initialState
    default:
      return state
  }
}

export default message
