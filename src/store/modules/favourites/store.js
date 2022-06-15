import * as constants from './constants'
import reducers from './reducers'

const initialState = {
  groupBy: 'default',
  results: []
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_FAVOURITE:
      return reducers.addFavourite(state, action)
    case constants.SET_GROUP_BY:
      return reducers.setGroupBy(state, action)
    default:
      return state
  }
}

export default store
