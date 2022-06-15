import { useSelector, useDispatch } from 'react-redux'
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'

import { selectors as favouritesSelectors, actions as favouritesActions } from '../store/modules/favourites'

function Favourites () {
  const dispatch = useDispatch()
  const favourites = useSelector(favouritesSelectors.getFavourites)
  const groupBy = useSelector(favouritesSelectors.getFavouriteGroupBy)
  
  function handleGroupByChange (event) {
    dispatch(favouritesActions.setGroupBy(event.target.value))
  }

  return <>
    <Box sx={{ padding: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="favourite-groupby-label">Group By</InputLabel>
        <Select
          labelId="favourite-groupby-label"
          id="favourite-groupby"
          value={groupBy}
          label="Group By"
          onChange={handleGroupByChange}
        >
          <MenuItem value={'default'}>Default</MenuItem>
          <MenuItem value={'format'}>Format</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <List>
      {favourites.map((fave) => (
        <ListItem key={fave.name} disablePadding>
          <ListItemButton>
            <ListItemText primary={fave.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
} 

export default Favourites