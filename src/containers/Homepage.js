import React from 'react'
// import reactId from 'react-id-generator'
// import { Link } from 'react-router-dom'
import Media from 'react-media'
// import { withRouter } from 'react-router-dom'
// import Odometer from 'react-odometerjs'
// import 'odometer/themes/odometer-theme-default.css'

import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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
  },
  mainContainerMobile: {
    padding: 0
  },
  opacitySection: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `40px 100px`
  },
  opacitySectionMobile: {
    flexDirection: 'column',
    padding: `10px 20px`
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 100
  },
  buttonContainerMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 0,
    marginTop: 40
  },
  presentationText: {
    borderLeft: 'solid 1px white',
    paddingLeft: 100
  },
  presentationTextMobile: {
    borderLeft: 'solid 0px white',
    borderBottom: 'solid 1px white',
    paddingLeft: 0,
    paddingBottom: 40,
    textAlign: 'center'
  },
  button: {
    marginTop: 40
  },
  buttonMobile: {
    marginTop: 20
  },
  text: {
    color: 'white',
    fontFamily: 'helvetica-regular'
  },
  nameText: {
    fontSize: 50,
    fontStyle: 'italic'
  },
  jobText: {
    marginTop: 20,
    fontSize: 30
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 30
  },
  constructionText: {
    marginTop: 20,
    fontSize: 14,
    fontStyle: 'italic'
  }
})

class Homepage extends React.Component {
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
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
            matches ? (
              <div className={`${classes.mainContainer} ${classes.mainContainerMobile}`}>
                <div className={`${classes.opacitySection} ${classes.opacitySectionMobile}`}>
                  <div className={`${classes.presentationText} ${classes.presentationTextMobile}`}>
                    <Typography
                      variant="h5"
                      className={`${classes.text} ${classes.nameText}`}
                    >
                      Charlotte
                      <br/>
                      Dieleman
                    </Typography>
                    <Typography
                      variant="h5"
                      className={`${classes.text} ${classes.jobText}`}
                    >
                      Développeuse Web Junior
                      <br/>
                      Front-end - React
                    </Typography>
                    <Typography
                      variant="h5"
                      className={`${classes.text} ${classes.welcomeText}`}
                    >
                    Bienvenue ! Voici mon portfolio.
                    </Typography>
                  </div>
                  <div className={classes.buttonContainerMobile}>
                    <Button variant="outlined" color="secondary" onClick={() => this.handleClick()}>
                      GreenCityKid application
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Téléchargez CV
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={classes.mainContainer}>
                <div className={classes.opacitySection}>
                  <div className={classes.buttonContainer}>
                    <Button variant="outlined" color="secondary" onClick={() => this.handleClick()}>
                      GreenCityKid application
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Téléchargez CV
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                      Contact
                    </Button>
                  </div>
                  <div className={classes.presentationText}>
                    <Typography
                      variant="h4"
                      className={`${classes.text} ${classes.nameText}`}
                    >
                      Charlotte
                      <br/>
                      Dieleman
                    </Typography>
                    <Typography
                      variant="h4"
                      className={`${classes.text} ${classes.jobText}`}
                    >
                      Développeuse Web Junior
                      <br/>
                      Front-end - React
                    </Typography>
                    <Typography
                      variant="h4"
                      className={`${classes.text} ${classes.welcomeText}`}
                    >
                    Bienvenue ! voici mon portfolio.
                    </Typography>
                    <Typography
                      variant="h4"
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

