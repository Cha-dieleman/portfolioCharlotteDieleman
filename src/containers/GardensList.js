import React from 'react'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Header from '../globalComponents/Header'
import { setNav } from '../actions'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fbfbfb'
  },
  button: {
    marginBottom: 80,
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
    history.push('/home')
  }

  render() {
    const { classes } = this.props
    setNav({
        firstLevel: 'home',
        secondLevel: 'liste'
    })

    return (
        <div className={classes.mainContainer}>
        <Header />
        <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()}>
            Revenir à la page d'accueil
        </Button>
        </div>
    )
  }
}

export default withStyles(styles)(GardensList)