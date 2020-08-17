import React from 'react'
import Media from 'react-media'
import { withRouter } from 'react-router-dom'
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-default.css'

import EcoIcon from '@material-ui/icons/Eco'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

import imgBreathe from '../static/images/imgBreathe.jpg'
import Footer from '../globalComponents/Footer'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex'
  },
  mainContainerMobile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 'auto'
  },
  firstContainer: {
    backgroundImage: `url(${imgBreathe})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  firstContainerMobile: {
    height: '30vh'
  },
  containerMobile: {
    width: '100vw',
    height:'100vh',
    padding: '0px 0px 0px',
  },
  containerDesktop: {
    width: '50vw'
  },
  secondContainer: {
    padding: '0px 20px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between'
  },
  secondContainerMobile: {
    height: '68vh',
    padding: '10px 20px 0px'
  },
  flexLogo: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0px 0px 10px'
  },
  logoImg: {
    width: 30,
    height: 'auto',
    color: 'white'
  },
  logoImgDesktop: {
    width: 50
  },
  logoText: {
    color: 'white',
    fontFamily: 'helvetica-regular'
  },
  button: {
    marginTop: 40,
    color: '#B76E22'
  },
  buttonMobile: {
    color: '#B76E22'
  },
  secondButton: {
    marginLeft: 20
  },
  imgBreathe: {
    width: '100%',
    height: '100vh'
  },
  firstSecondContainer: {
    padding: '0px 0px 0px',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: 'solid 2px #B76E22'
  },
  firstSecondContainerMobile: {
    height: '80%',
    padding: '0px 0px 20px',
    marginBottom: 0
  },
  secondSecondContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px 0px 0px',
    height: '20%',
    marginBottom: 0
  },
  typo: {
    fontStyle: 'italic',
    fontFamily: 'helvetica-regular'
  },
  typoDevBy: {
    width: 'auto'
  },
  typoDevByMobile: {
    marginTop: 100
  },
  secondTypo: {
    marginTop: 20,
    fontFamily: 'helvetica-regular'
  },
  odometerTypo: {
    color: '#B76E22',
  }
})

class Home extends React.Component {
  _isMounted = false
    constructor(props) {
      super(props)
      this.state = {
        currentCount: 0,
        odometerValue: 0
      }
    }

    componentDidMount() {
      this._isMounted = true
      this.setState({ odometerValue: 295 })
      window.scrollTo(0, 0)
    }

    goToParksListView = () => {
      const { history } = this.props
      history.push('/parksList')
    }

    goToInConstruction = () => {
      const { history } = this.props
      history.push('/parksMap')
    }

    componentWillUnmount() {
      this._isMounted = false
    }

    render() {
      const { classes } = this.props
      const { odometerValue } = this.state

      return (
        <div>
        <Media query={{ maxWidth: 1024 }}>
        {(matches) =>
          matches ? (
            <div className={`${classes.mainContainer} ${classes.mainContainerMobile}`}>
              <div className={`${classes.firstContainer} ${classes.firstContainerMobile}`}>
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
              <div className={`${classes.secondContainer} ${classes.secondContainerMobile}`}>
                <div className={`${classes.firstSecondContainer} ${classes.firstSecondContainerMobile}`}>
                  <Typography
                    variant="h5"
                    className={classes.typo}
                  >
                    1 répertoire de
                  </Typography>
                  <Typography
                    variant="h5"
                    className={`${classes.typo} ${classes.odometerTypo}`}
                  >
                    <Odometer
                      format="d"
                      duration={ 1000 }
                      value={ odometerValue }
                    />
                    </Typography>
                    <Typography
                    variant="h5"
                    className={classes.typo}
                    align='center'
                  >
                    parcs, jardins
                    <br/>
                    et lieux de balade
                    <br/>
                    lyonnais.
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.secondTypo}
                    align='center'
                  >
                    Envie d'un bon bol de verdure pour vos ptits Gones ?
                    <br/>
                    GreenCityKid met à votre disposition une multitude d'informations sur les zones vertes qu'offre la ville de Lyon.
                    <br/>
                    Vous pourrez ainsi anticiper vos sorties, pour des instants encore plus magiques !
                  </Typography>
                </div>
                <div className={`${classes.secondSecondContainer} ${classes.firstSecondContainerMobile}`}>
                  <Button variant="outlined" className={classes.buttonMobile} onClick={() => this.goToInConstruction()} size="small">
                    Accéder à la carte
                  </Button>
                  <Button variant="outlined" className={`${classes.buttonMobile} ${classes.secondButton}`} onClick={() => this.goToParksListView()} size="small">
                    Accéder à la liste
                  </Button>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                  <Footer />
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.mainContainer}>
              <div className={`${classes.firstContainer} ${classes.containerDesktop}`}>
                <div className={classes.flexLogo}>
                  <EcoIcon className={`${classes.logoImg} ${classes.logoImgDesktop}`}/>
                  <Typography
                    variant="h4"
                    className={classes.logoText}
                  >
                    GreenCityKid
                  </Typography>
                </div>
              </div>
              <div className={`${classes.secondContainer} ${classes.containerDesktop}`}>
                <div className={`${classes.firstSecondContainer}`}>
                  <Typography
                    variant="h4"
                    className={classes.typo}
                  >
                    1 répertoire de
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.typo} ${classes.odometerTypo}`}
                  >
                    <Odometer
                      format="d"
                      duration={ 1000 }
                      value={ odometerValue }
                    />
                    </Typography>
                    <Typography
                    variant="h4"
                    className={classes.typo}
                  >
                    parcs, jardins
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.typo}
                  >
                    et lieux de balade lyonnais.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.secondTypo}
                    align='center'
                  >
                    Envie d'un bon bol de verdure pour vos ptits Gones ?
                    <br/>
                    GreenCityKid met à votre disposition une multitude d'informations sur les zones vertes qu'offre la ville de Lyon.
                    <br/>
                    Vous pourrez ainsi anticiper vos sorties, pour des instants encore plus magiques !
                  </Typography>
                </div>
                <div className={classes.secondSecondContainer}>
                  <Button variant="outlined" className={classes.button} onClick={() => this.goToInConstruction()}>
                    Accéder à la carte
                  </Button>
                  <Button variant="outlined" className={`${classes.button} ${classes.secondButton}`} onClick={() => this.goToParksListView()}>
                    Accéder à la liste
                  </Button>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                  <Footer />
                </div>
              </div>
            </div>
          )
        }
      </Media>
      </div>
      )
    }
  }

export default withStyles(styles)(withRouter(Home))


