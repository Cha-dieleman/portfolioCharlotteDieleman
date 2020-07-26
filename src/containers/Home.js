import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-default.css'

import EcoIcon from '@material-ui/icons/Eco'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Typography, Button, Tooltip } from '@material-ui/core'

import imgBreathe from '../static/images/imgBreathe.png'

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
    height: 'auto',
  },
  firstContainer: {
    backgroundImage: `url(${imgBreathe})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  firstContainerMobile: {
    height: 500
  },
  containerMobile: {
    width: '100vw',
    height:'auto',
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
    alignItems: 'stretch'
  },
  secondContainerMobile: {
    padding: '40px 20px 0px'
  },
  flexLogo: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0px 0px 10px'
  },
  logoImg: {
    width: 50,
    height: 'auto',
    color: 'white'
  },
  logoText: {
    color: 'white',
    fontFamily: 'helvetica-regular'
  },
  button: {
    marginTop: 40,
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
    padding: '0px 0px 60px',
    height: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: 'solid 2px #B76E22',
  },
  firstSecondContainerMobile: {
    height: 'auto'
  },
  secondSecondContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px 0px 0px',
    height: '40%'
  },
  thirdSecondContainer: {
    height: 'auto',
    padding: '0px 0px 20px 0px',
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
    marginTop: 40,
    fontFamily: 'helvetica-regular'
  },
  odometerTypo: {
    color: '#B76E22',
  }
})

const theme = createMuiTheme()

const WhiteTooltip = withStyles({
  tooltip: {
    color: '#818386',
    backgroundColor: 'white',
    border: 'solid .5px #AEB0B3',
    boxShadow: '2px 2px 5px #AEB0B3'
  }
})(Tooltip)

class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentCount: 0,
        odometerValue: 0
      }
    }

    componentDidMount() {
      this.setState({ odometerValue: 295 })
    }

    goToGardenListView = () => {
      const { history } = this.props
      history.push('/liste/parcs')
    }

    goToInConstruction = () => {
      const { history } = this.props
      history.push('/construction')
    }
  
    render() {
      const { classes } = this.props
      const { odometerValue } = this.state

      return (
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
                    et lieux de balade.
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
                <div className={`${classes.secondSecondContainer} ${classes.firstSecondContainerMobile}`}>
                  <Button variant="outlined" className={classes.button} onClick={() => this.goToInConstruction()}>
                    Accéder la carte
                  </Button>
                  <Button variant="outlined" className={`${classes.button} ${classes.secondButton}`} onClick={() => this.goToGardenListView()}>
                    Accéder à la liste
                  </Button>
                </div>
                <div className={classes.thirdSecondContainer}>
                  <MuiThemeProvider theme={theme}>
                    <WhiteTooltip
                      title='Revenir au portfolio'
                      className={classes.tooltipDesign}
                      placement="top"
                    >
                    <Link to='/' style={{ textDecoration: 'none', color:'#B76E22' }}>
                      <Typography
                        variant="body2"
                        className={`${classes.typoDevBy} ${classes.typoDevByMobile}`}
                        align='right'
                      >
                        Développé par Charlotte Dieleman
                      </Typography>
                      </Link>
                    </WhiteTooltip>
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.mainContainer}>
              <div className={`${classes.firstContainer} ${classes.containerDesktop}`}>
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
              <div className={`${classes.secondContainer} ${classes.containerDesktop}`}>
                <div className={classes.firstSecondContainer}>
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
                    et lieux de balade.
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
                    Accéder la carte
                  </Button>
                  <Button variant="outlined" className={`${classes.button} ${classes.secondButton}`} onClick={() => this.goToGardenListView()}>
                    Accéder à la liste
                  </Button>
                </div>
                <div className={classes.thirdSecondContainer}>
                  <MuiThemeProvider theme={theme}>
                    <WhiteTooltip
                      title='Revenir au portfolio'
                      className={classes.tooltipDesign}
                      placement="top"
                    >
                    <Link to='/' style={{ textDecoration: 'none', color:'#B76E22' }}>
                      <Typography
                        variant="body2"
                        className={classes.typoDevBy}
                        align='right'
                      >
                        Développé par Charlotte Dieleman
                      </Typography>
                      </Link>
                    </WhiteTooltip>
                  </MuiThemeProvider>
                </div>
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

export default withStyles(styles)(connect(mapStateToProps)(Home))

