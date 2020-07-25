import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-default.css'

import EcoIcon from '@material-ui/icons/Eco'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

import { testAction } from '../actions'
import imgBreathe from '../static/images/imgBreathe.png'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex'
  },
  firstContainer: {
    backgroundImage: `url(${imgBreathe})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '50vw'
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '50vw'
  },
  flexLogo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoImg: {
    width: 50,
    height: 'auto',
    color: 'white'

  },
  logoText: {
    color: 'white'
  },
  button: {
    marginTop: 40
  },
  imgBreathe: {
    width: '100%',
    height: '100vh'
  },
  firstSecondContainer: {
    height: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  secondSecondContainer: {
    height: '50%'
  },
  typo: {
  }
})

class Parcours extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentCount: 0,
        odometerValue: 0
      }
    }

    componentDidMount() {
      this.setState({ odometerValue: 631688 })
    }
  
    render() {
      const { classes, history } = this.props
      const { odometerValue } = this.state

      return (
        <Media query={{ maxWidth: 1024 }}>
        {(matches) =>
          matches ? (
            <div className={classes.mainContainer}>
              <div className={classes.firstContainer}>
                <div className={classes.flexLogo}>
                  <EcoIcon className={classes.logoImg}/>
                  <Typography
                    variant="h5"
                    className={classes.logoText}
                  >
                    GreenCityKid
                  </Typography>
                </div>
              </div>
              <div className={classes.secondContainer}>
                <div className={classes.firstSecondContainer}>
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.typo}
                  >
                    1 répertoire de
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.typo}
                  >
                    <Odometer
                      format="d"
                      duration={ 1000 }
                      value={ odometerValue }
                    />
                    </Typography>
                    <Typography
                    variant="h4"
                    component="h4"
                    className={classes.typo}
                  >
                    Parcs, jardins
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.typo}
                  >
                    et lieux de balade.
                  </Typography>
                </div>
                <div className={classes.secondSecondContainer}>second</div>
              </div>
            </div>
          ) : (
            <div className={classes.mainContainer}>
              <div className={classes.firstContainer}>
                <div className={classes.flexLogo}>
                  <EcoIcon className={classes.logoImg}/>
                  <Typography
                    variant="h5"
                    className={classes.logoText}
                  >
                    GreenCityKid
                  </Typography>
                </div>
              </div>
              <div className={classes.secondContainer}>
                <div className={classes.firstSecondContainer}>
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.typo}
                  >
                    1 répertoire de
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.typo}
                  >
                    <Odometer
                      format="d"
                      duration={ 1000 }
                      value={ odometerValue }
                    />
                    </Typography>
                    <Typography
                    variant="h4"
                    component="h4"
                    className={classes.typo}
                  >
                    Parcs, jardins
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.typo}
                  >
                    et lieux de balade.
                  </Typography>
                </div>
                <div className={classes.secondSecondContainer}>second</div>
              </div>
            </div>
          )
        }
      </Media>
      )
    }
  }

  const mapStateToProps = (state) => {
      console.log('state : ', state)
    return ({
        test: state.test
    })
  }

export default withStyles(styles)(connect(mapStateToProps)(Parcours))

