import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Error404Img from '../static/images/Error404Img.jpg'

const styles = () => ({
  mainContainer: {
    backgroundImage: `url(${Error404Img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic',
    marginTop: 80,
    color: 'white'
  },
  button: {
    marginTop: 40,
    color: '#B76E22',
    border: 'solid 1px white',
  }
})

class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick = () => {
    const { history } = this.props
    history.push('/home')
  }

  render() {
    const { classes } = this.props

    return (
        <div className={classes.mainContainer}>
        <Typography
            variant="h4"
            className={classes.text}
            align='center'
        >
            Oups, désolé ...
            <br/>
            Erreur 404 !
            <br/>
            Page non trouvée
        </Typography>
        <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()}>
            Revenir à la page d'accueil
        </Button>
        </div>
    )
  }
}

export default withStyles(styles)(Error)


