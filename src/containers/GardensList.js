import React from 'react'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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
  button: {
    marginTop: 80,
    color: '#B76E22'
  }
})

class GardensList extends React.Component {
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
                <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()}>
                    Revenir à la page d'accueil
                </Button>
              </div>
    )
  }
}

export default withStyles(styles)(GardensList)