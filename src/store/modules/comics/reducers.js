class ComicsReducers {
  fetchComicsPending = (
    (state, action) => {
      return {
        ...state,
        status: 'pending'
      }
    }
  )
  fetchComicsSuccess = (
    (state, action) => {
      return {
        ...state,
        status: 'success',
        limit: action.payload.data.limit,
        offset: action.payload.data.offset,
        total: action.payload.data.total,
        results: action.payload.data.results
      }
    }
  )
  fetchComicsFail = (
    (state, action) => {
      return {
        ...state,
        status: 'error',
        error: action.payload,
        results: []
      }
    }
  )
}

export default new ComicsReducers()
