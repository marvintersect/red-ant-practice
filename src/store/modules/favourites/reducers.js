class FavouritesReducers {
  addFavourite = (
    (state, action) => {
      return {
        ...state,
        results: [
          ...state.results,
          ...[action.payload]
        ]
      }
    }
  )
  setGroupBy = (
    (state, action) => {
      return {
        ...state,
        groupBy: action.payload
      }
    }
  )
}

export default new FavouritesReducers()
