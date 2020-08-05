import React from 'react'
import Media from 'react-media'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  mainContainer: {
    height: 'auto',
    display: 'flex',
    wrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px 20px 5px 0px'
  },
  mainContainerDesktop: {
    padding: '0px 40px 0px 0px'
  },
  link: {
    textDecoration: 'none',
    opacity: .7,
    '&:hover': {
      opacity: 1
    }
  },
  linkWithoutOpacity: {
    textDecoration: 'none'
  },
  text: {
    color: 'white',
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic',
  },
  textNav: {
    marginLeft: 5
  }
})

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  setNavText = (text) => {
    if(text === 'parksMap'){
      return 'carte des espaces verts'
    } else if(text === 'parksList'){
      return 'liste des espaces verts'
    } else {
      return text
    }
  }

  render() {
    const { classes, navStateRedux } = this.props

    return (
        <Media query={{ maxWidth: 1024 }}>
            {(matches) =>
                matches ? (
                    <div className={classes.mainContainer}>
                      <Link to='/home'  className={classes.link}>
                          <Typography
                              variant="body1"
                              className={classes.text}
                              nowrap
                          >
                              {`${navStateRedux.firstLevel === 'home' ? 'Accueil' : navStateRedux.firstLevel} /`}
                          </Typography>
                      </Link>
                      <Link to='/parksList' className={navStateRedux.thirdLevel ? classes.link : classes.linkWithoutOpacity}>
                        <Typography
                            variant="body1"
                            className={`${classes.text} ${classes.textNav}`}
                        >
                            {`${navStateRedux.secondLevel}`}
                        </Typography>
                      </Link>
                      {
                        navStateRedux.thirdLevel ? (
                          <Typography
                              variant="body1"
                              className={`${classes.text} ${classes.textNav}`}
                              nowrap
                          >
                              {` / ${navStateRedux.thirdLevel}`}
                          </Typography>
                        ) : null
                      }
                    </div>
                ) : (
                    <div className={`${classes.mainContainer} ${classes.mainContainerDesktop}`}>
                      <Link to='/home'  className={classes.link}>
                          <Typography
                              variant="h5"
                              className={classes.text}
                          >
                            {`${navStateRedux.firstLevel === 'home' ? 'Accueil' : navStateRedux.firstLevel} /`}
                          </Typography>
                      </Link>
                      <Link to='/parksList' className={navStateRedux.thirdLevel ? classes.link : classes.linkWithoutOpacity}>
                        <Typography
                            variant="h5"
                            className={`${classes.text} ${classes.textNav}`}
                        >
                            {`${this.setNavText(navStateRedux.secondLevel)}`}
                        </Typography>
                      </Link>
                      {
                        navStateRedux.thirdLevel ? (
                          <Typography
                              variant="h5"
                              className={`${classes.text} ${classes.textNav}`}
                              nowrap
                          >
                              {` / ${navStateRedux.thirdLevel}`}
                          </Typography>
                        ) : null
                      }
                    </div>
                )
            }
      </Media>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    navStateRedux: state.nav.nav
  })
}

export default withStyles(styles)(connect(mapStateToProps)(Breadcrumb))


