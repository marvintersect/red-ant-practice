import * as constants from './constants'

class FavouritesActions {
  addFavourite(favourite) {
    return {
      type: constants.ADD_FAVOURITE,
      payload: favourite
    }
  }

  setGroupBy(groupBy) {
    return {
      type: constants.SET_GROUP_BY,
      payload: groupBy
    }
  }
}

export default new FavouritesActions()
