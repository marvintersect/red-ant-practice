import { useState } from 'react'
import { useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'

import Favorites from './Favourites'
import { selectors as favouritesSelectors } from '../store/modules/favourites'

function HeaderBar () {
  const [drawerVisible, toggleDrawer] = useState(false)
  const favouriteCount = useSelector(favouritesSelectors.getFavouriteCount)
  return <>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Red Ant Comics
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => toggleDrawer(true)}
        >
          <Badge badgeContent={favouriteCount} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <Drawer open={drawerVisible} anchor='left' onClose={() => toggleDrawer(false)}>
          <Box width={300}>
            <Favorites />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  </>
}

export default HeaderBar