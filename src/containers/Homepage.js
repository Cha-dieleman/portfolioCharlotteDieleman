import React from 'react'
// import reactId from 'react-id-generator'
// import Odometer from 'react-odometerjs'
// import { Link } from 'react-router-dom'
import Media from 'react-media'
// import { withRouter } from 'react-router-dom'

// import 'odometer/themes/odometer-theme-default.css'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import sandBackground from '../static/images/sandBackground.jpg'
// import backgroundHome from '../static/images/backgroundHome.jpg'
import backgroundImageHome from '../static/images/backgroundImageHome.jpg'

const styles = () => ({
  mainContainer: {
    backgroundImage: `url(${backgroundImageHome})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // filter: 'grayscale(10%)'
  },
  forOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `40px 100px`
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 100
  },
  rightContainer: {
    borderLeft: 'solid 1px white',
    paddingLeft: 100
  },
  button: {
    marginTop: 40
  },
  largeViewportImg: {
    // backgroundPosition: '25% 75%',
    // width: 1000
  },
  text: {
    color: 'white'
  },
  nameText: {
    fontSize: 50,
    fontStyle: 'italic'
  },
  jobText: {
    marginTop: 20,
    fontSize: 20
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 30
  },
  constructionText: {
    marginTop: 20,
    fontSize: 14,
    fontStyle: 'italic'
  },
  sandImg: {
    width: 200,
    height: 'auto'
  }
})

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentCount: 0,
      // odometerValue: 0
    }
  }

  // componentDidMount() {
  //   this.setState({ odometerValue: 631688 })
  // }

  render() {
    const { classes } = this.props
    // const { odometerValue } = this.state

    return (
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
            matches ? (
              <div className={`${classes.mainContainer} ${classes.largeViewportImg}`}>
                <div className={classes.forOpacity}>
                  <div className={classes.leftContainer}>
                    <Button variant="outlined" color="secondary">
                      GreenCityKid application
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Téléchargez CV
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Contact
                    </Button>
                  </div>
                  <div className={classes.rightContainer}>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.nameText}`}
                    >
                      Charlotte
                      <br/>
                      Dieleman
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.jobText}`}
                    >
                      Développeuse Web Junior
                      <br/>
                      Front-end - React
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.welcomeText}`}
                    >
                    Bienvenue ! voici mon portfolio.
                    </Typography>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${classes.mainContainer} ${classes.largeViewportImg}`}>
                <div className={classes.forOpacity}>
                  <div className={classes.leftContainer}>
                    <Button variant="outlined" color="secondary">
                      GreenCityKid application
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Téléchargez CV
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Contact
                    </Button>
                  </div>
                  <div className={classes.rightContainer}>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.nameText}`}
                    >
                      Charlotte
                      <br/>
                      Dieleman
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.jobText}`}
                    >
                      Développeuse Web Junior
                      <br/>
                      Front-end - React
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.welcomeText}`}
                    >
                    Bienvenue ! voici mon portfolio.
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={`${classes.text} ${classes.constructionText}`}
                      align='right'
                    >
                    ( En cours de construction )
                    </Typography>
                  </div>
                </div>
              </div>
            )
          }
        </Media>
    )
  }
}

// export default withRouter(withStyles(styles)(connect(mapStateToProps)(Homepage)))
export default withStyles(styles)(Homepage)

// <img
//   src={sand}
//   alt='sandbox'
//   className={classes.sandImg}
// />

// <Odometer
// format="d"
// duration={ 1000 }
// value={ odometerValue }
// />