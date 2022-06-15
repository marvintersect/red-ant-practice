import * as constants from './constants'
import comicsService from '../../../services/comicsService'

class ComicsActions {
  fetchComics(page = 1) {
    return function (dispatch, getState) {
      dispatch({
        type: constants.FETCH_COMICS_PENDING
      })

      return comicsService.fetchComics()
        .then(data => dispatch({
          type: constants.FETCH_COMICS_SUCCESS,
          payload: data
        }))
        .catch(error => dispatch({
          type: constants.FETCH_COMICS_FAIL,
          payload: error
        }))
    }
  }
}

export default new ComicsActions()
