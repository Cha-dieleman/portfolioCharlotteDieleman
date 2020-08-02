import React from 'react'
import Media from 'react-media'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import parkImg from '../static/images/parkImg.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    marginBottom: 20
  },
  imgCard: {
      height: 100,
      width: 340,
      marginBottom: 10,
      boxSizing: 'border-box'
  }
})

function CardPark(props) {
  const { data, selectedParkNameRedux } = props
  const classes = useStyles()

  const handleClick = (data) => {
    const { history } = props
    history.push(`/parksList/${data.properties.nom}`)
  }

  return (
    <Media query={{ maxWidth: 1024 }}>
    {(matches) =>
        matches ? (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia src={parkImg} component="img" title="Some title" className={classes.imgCard} />
        <CardContent style={{padding: 5}}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.properties.nom}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.properties.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{padding: 5, display:'flex', justifyContent:'center', alignItems:'center',  margin: `10px 0px`}}>
        <Button variant="outlined" style={{color: '#B76E22', marginBottom: 5}} onClick={() => handleClick(data)}>
          En savoir plus
        </Button>
      </CardActions>
    </Card>
    ) : (
        <Card style={{widt: 340, height: 400,marginTop:20, boxSizing: 'border-box', marginBottom: selectedParkNameRedux !== null ? 0 : 20, marginRight: selectedParkNameRedux !== null ? 0 : 20}}>
        <CardActionArea>
        <CardMedia src={parkImg} component="img" title="Some title" className={classes.imgCard} />
          <CardContent style={{padding: 10, height: 200, boxSizing: 'border-box'}}>
            <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
            {data.properties.nom}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.properties.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{padding: 5, height: 50, display:'flex', justifyContent:'center', alignItems:'center', margin: `10px 0px`}}  onClick={() => handleClick(data)}>
          <Button variant="outlined" style={{color: '#B76E22', margin: 5}}>
            En savoir plus
          </Button>
        </CardActions>
      </Card>
      )
    }
</Media>
)
}

const mapStateToProps = (state) => {
    return ({
        selectedParkNameRedux: state.selectedPark.name
    })
}

export default withRouter(connect(mapStateToProps)(CardPark))