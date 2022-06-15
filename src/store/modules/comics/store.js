import * as constants from './constants'
import reducers from './reducers'

const initialState = {
  status: 'init',
  error: undefined,
  results: [],
  limit: 3
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_COMICS_PENDING:
      return reducers.fetchComicsPending(state, action)
    case constants.FETCH_COMICS_SUCCESS:
      return reducers.fetchComicsSuccess(state, action)
    case constants.FETCH_COMICS_FAIL:
      return reducers.fetchComicsFail(state, action)
    default:
      return state
  }
}

export default store
