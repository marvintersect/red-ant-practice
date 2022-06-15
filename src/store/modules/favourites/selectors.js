export const getFavourites = state => {
  const comics = state.comics.results || []
  const favourites = state.favourites.results || []

  const favouriteComics = comics.filter((comic) => {
    return favourites.includes(comic.id)
  })

  return favouriteComics
}

export const getFavouriteCount = state => {
  const favourites = state.favourites.results || []
  return favourites.length
}

export const getFavouriteGroupBy = state => {
  return state.favourites.groupBy || 'default'
}
