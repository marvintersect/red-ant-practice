import { useDispatch, useSelector } from 'react-redux'
import { selectors as comicsSelectors, actions as comicsActions } from '../store/modules/comics'
import { actions as favouritesActions } from '../store/modules/favourites'
import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

import { actions } from '../store/modules/comics'
import Comic from '../components/Comic'

function ProductList (products = []) {
  const dispatch = useDispatch()

  const comics = useSelector(comicsSelectors.getComics)
  const pageNumber = useSelector(comicsSelectors.getPageNumber)
  
  useEffect(() => {
    dispatch(actions.fetchComics())
  }, [dispatch])

  function handleClickFavourite (comic) {
    dispatch(favouritesActions.addFavourite(comic.id))
  }

  function handlePageChange (event, value) {
    // TODO: add page change handler
  }

  return <>
    <Box sx={{ padding: 2 }}>
      <Pagination count={10} page={pageNumber} onChange={handlePageChange} />
    </Box>
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {
          comics.map((comic) => (
            <Grid key={comic.id} item xs={4}>
              <Comic
                onClickFavourite={() => handleClickFavourite(comic)}
                title={comic.title}
                image={comic.thumbnail}
              />
            </Grid>
          ))
        }
     </Grid>
    </Box>
    <Box sx={{ padding: 2 }}>
      <Pagination count={10} page={pageNumber} onChange={handlePageChange} />
    </Box>
  </>
}

export default ProductList