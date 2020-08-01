import React from 'react'
import Media from 'react-media'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance'

const styles = () => ({
  mainContainer: {
    height: 'auto',
    display: 'flex',
    wrap: 'noWrap',
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
    color: '#B76E22',
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic',
    fontWeight: 900
  },
  textNav: {
    marginLeft: 5
  },
  cameraImgMobile: {
    width: 30,
    height: 'auto',
    color: '#B76E22',
    marginRight: 2,
    marginLeft: 5,
  },
  cameraImg: {
    marginRight: 20
  }
})

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes, navStateRedux } = this.props

    return (
        <Media query={{ maxWidth: 1024 }}>
            {(matches) =>
                matches ? (
                    <div className={classes.mainContainer}>
                      <CameraEnhanceIcon className={classes.cameraImgMobile}/>
                      <Link to='/home'  className={classes.link}>
                          <Typography
                              variant="body1"
                              className={classes.text}
                              noWrap
                          >
                              {`${navStateRedux.firstLevel} /`}
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
                              noWrap
                          >
                              {` / ${navStateRedux.thirdLevel}`}
                          </Typography>
                        ) : null
                      }
                    </div>
                ) : (
                    <div className={`${classes.mainContainer} ${classes.mainContainerDesktop}`}>
                      <CameraEnhanceIcon className={`${classes.cameraImgMobile} ${classes.cameraImg}`}/>
                      <Link to='/home'  className={classes.link}>
                          <Typography
                              variant="h5"
                              className={classes.text}
                          >
                              {`${navStateRedux.firstLevel} /`}
                          </Typography>
                      </Link>
                      <Link to='/parksList' className={navStateRedux.thirdLevel ? classes.link : classes.linkWithoutOpacity}>
                        <Typography
                            variant="h5"
                            className={`${classes.text} ${classes.textNav}`}
                        >
                            {`${navStateRedux.secondLevel}`}
                        </Typography>
                      </Link>
                      {
                        navStateRedux.thirdLevel ? (
                          <Typography
                              variant="h5"
                              className={`${classes.text} ${classes.textNav}`}
                              noWrap
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


