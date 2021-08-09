import * as action from './actionTypes'

export const changeCurrentPath = (currentPath: string) => {
  return {
    type: action.PATH_CHANGE_REQUEST,
    payload: { currentPath: currentPath },
  }
}
