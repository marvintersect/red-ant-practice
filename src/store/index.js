import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { store as comicsStore} from './modules/comics'
import { store as favouritesStore } from './modules/favourites'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = () => ({
  comics: comicsStore,
  favourites: favouritesStore
})

const store = createStore(
  combineReducers(reducers()),
  composeEnhancers(
    applyMiddleware(thunk),
  )
)

export default store