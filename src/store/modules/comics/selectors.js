import _ from 'lodash'

export const getComics = state => {
  const comics = _.get(state, 'comics.results', [])

  return comics.map((comic) => {
    return {
      ...comic,
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    }
  })
}

export const getPageNumber = state => {
  return _.get(state, 'comics.page', [])
}
