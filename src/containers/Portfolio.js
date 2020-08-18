import React from 'react'
// import reactId from 'react-id-generator'
// import { Link } from 'react-router-dom'
import Media from 'react-media'
import { withRouter } from 'react-router-dom'
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `40px 100px`,
    width: '70vw'
  },
  opacitySectionMobile: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    width: '70vw',
    height: 'auto',
    marginTop: 30,
    marginBottom: 30,
    padding: `20px 20px`
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
    marginTop: 20
  },
  presentationText: {
    borderLeft: 'solid 1px white',
    paddingLeft: 100
  },
  presentationTextMobile: {
    borderLeft: 'solid 0px white',
    borderBottom: 'solid 1px white',
    paddingLeft: 0,
    paddingBottom: 20,
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
  nameTextMobile: {
    fontSize: 30,
    fontStyle: 'italic'
  },
  jobText: {
    marginTop: 20,
    fontSize: 30
  },
  jobTextMobile: {
    marginTop: 10,
    fontSize: 18
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 25
  },
  welcomeTextMobile: {
    marginTop: 10,
    fontSize: 18
  },
  constructionText: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: 'italic'
  },
  constructionTextMobile: {
    marginTop: 10,
    fontSize: 13,
    fontStyle: 'italic'
  },
  recoText: {
    marginTop: 20,
    fontSize: 13,
    fontStyle: 'italic',
    color: '#f50057'
  },
  recoTextDesktop: {
    fontSize: 18
  }
})

class Portfolio extends React.Component {
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
      <div>
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
            matches ? (
              <div className={`${classes.mainContainer} ${classes.mainContainerMobile}`}>
                <div className={`${classes.opacitySection} ${classes.opacitySectionMobile}`}>
                  <div className={`${classes.presentationText} ${classes.presentationTextMobile}`}>
                    <Typography
                      variant="body1"
                      className={`${classes.text} ${classes.nameTextMobile}`}
                    >
                      Charlotte Dieleman
                    </Typography>
                    <Typography
                      variant="body1"
                      className={`${classes.text} ${classes.jobTextMobile}`}
                    >
                      Développeuse Web Junior
                      <br/>
                      Front-end - React
                    </Typography>
                    <Typography
                      variant="body1"
                      className={`${classes.text} ${classes.welcomeTextMobile}`}
                    >
                    Bienvenue ! Voici mon portfolio.
                    </Typography>
                    <Typography
                      variant="body2"
                      className={`${classes.text} ${classes.constructionTextMobile}`}
                      align='center'
                    >
                    <br/>
                    Remerciements : Un grand merci à toute l'équipe Product de namR,
                    <br/>
                    pour votre accueil en stage et votre gentillesse,
                    <br/>
                    pour m'avoir transmis votre workflow ainsi que vos connaissances !
                    <br/>
                    <br/>
                    ( Portfolio en cours de construction )
                    </Typography>
                  </div>
                  <div className={classes.buttonContainerMobile}>
                    <Button variant="outlined" color="secondary" onClick={() => this.handleClick()} size="small">
                      GreenCityKid application
                    </Button>
                    <a
                      href="https://drive.google.com/file/d/17xatdu44mwcVzHWSFCsfyCY1MAH_j7TS/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="always"
                      style={{textDecoration: "none"}}
                    >
                      <Button variant="outlined" color="secondary" className={classes.buttonMobile} size="small">
                        Télécharger CV
                      </Button>
                    </a>
                    <a href="mailto:chadieleman@gmail.com" style={{textDecoration: "none"}}>
                      <Button variant="outlined" color="secondary" className={classes.buttonMobile} size="small">
                        Contact
                      </Button>
                    </a>
                    <Typography
                      variant="h6"
                      className={`${classes.text} ${classes.recoText}`}
                      align='center'
                    >
                    Lettre de recommandation sur demande
                    </Typography>
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
                    <a
                      href="https://drive.google.com/file/d/17xatdu44mwcVzHWSFCsfyCY1MAH_j7TS/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="always"
                      style={{textDecoration: "none"}}
                    >
                      <Button variant="outlined" color="secondary" className={classes.button}>
                        Télécharger CV
                      </Button>
                    </a>
                    <a href="mailto:chadieleman@gmail.com" style={{textDecoration: "none"}}>
                      <Button variant="outlined" color="secondary" className={classes.button}>
                        Contact
                      </Button>
                    </a>
                    <br/>
                    <Typography
                      variant="h6"
                      className={`${classes.text} ${classes.recoText} ${classes.recoTextDesktop}`}
                      align='right'
                    >
                    Lettre de recommandation sur demande
                    </Typography>
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
                      variant="h6"
                      className={`${classes.text} ${classes.constructionText}`}
                      align='left'
                    >
                    <br/>
                    Remerciements : Un grand merci à toute l'équipe Product de namR,
                    <br/>
                    pour votre accueil en stage et votre gentillesse,
                    <br/>
                    pour m'avoir transmis votre workflow ainsi que vos connaissances !
                    </Typography>
                    <Typography
                      variant="h6"
                      className={`${classes.text} ${classes.constructionText}`}
                      align='right'
                    >
                    <br/>
                    <br/>
                    ( Portfolio en cours de construction )
                    </Typography>
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

export default withStyles(styles)(withRouter(Portfolio))



