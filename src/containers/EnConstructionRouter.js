import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

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

class EnConstructionRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick = () => {
    const { history} = this.props
    history.push('/home')
  }

  render() {
    const { classes  } = this.props

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
                    'Section en cours de construction, repassez plus tard ...'
                </Typography>
                <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()}>
                    Revenir à la page d'accueil
                </Button>
              </div>
    )
  }
}

export default withStyles(styles)(withRouter(EnConstructionRouter))



