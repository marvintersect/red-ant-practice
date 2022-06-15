import _ from 'lodash'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '@mui/material/Typography'

function Comic ({ title, image, onClickFavourite = _.noop }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="250"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="b">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={onClickFavourite} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Comic