import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import constructionImg from '../static/images/constructionImg.jpg'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfbfb'
  },
  text: {
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic'
  },
  button: {
    marginTop: 80,
    color: '#B76E22'
  }
})

class EnConstruction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick = () => {
    const { history } = this.props
    history.push('/parcours')
  }

  render() {
    const { classes } = this.props

    return (
              <div className={classes.mainContainer}>
                <img 
                    src={constructionImg}
                    alt='télécharger en pdf'
                    style={{ width: 200, height: 300 }}
                />
                <Typography
                    variant="h6"
                    className={classes.text}
                    align='center'
                >
                    En cours de construction
                    <br/>
                    Repassez plus tard ...
                </Typography>
                <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()}>
                    Revenir à la page d'accueil
                </Button>
              </div>
    )
  }
}

export default withStyles(styles)(EnConstruction)


