import React from 'react'
import Media from 'react-media'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import test from './test.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    marginBottom: 20
  },
  rootDesktop: {
    maxWidth: 340,
    marginBottom: 20,
    marginRight: 20
  },
  imgCard: {
      height: 100,
      width: 340
  }
})

export default function ImgMediaCard() {
  const classes = useStyles()

  return (
    <Media query={{ maxWidth: 1024 }}>
    {(matches) =>
        matches ? (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia src={test} component="img" title="Some title" className={classes.imgCard} />
        <CardContent style={{padding: 5}}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{padding: 5, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button variant="outlined" style={{color: '#B76E22', marginBottom: 5}}>
          En savoir plus
        </Button>
      </CardActions>
    </Card>
    ) : (
        <Card className={classes.rootDesktop}>
        <CardActionArea>
        <CardMedia src={test} component="img" title="Some title" className={classes.imgCard} />
          <CardContent style={{padding: 5}}>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{padding: 5, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Button variant="outlined" style={{color: '#B76E22', marginBottom: 5}}>
            En savoir plus
          </Button>
        </CardActions>
      </Card>
      )
    }
</Media>
)
}