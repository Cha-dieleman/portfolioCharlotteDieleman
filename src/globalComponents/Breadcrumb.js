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
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px 10px 5px 0px'
  },
  mainContainerMobile: {
    padding: '0px 20px 0px 0px'
  },
  text: {
    color: 'white',
    fontFamily: 'helvetica-regular'
  },
  textSecondNav: {
    color: 'white',
    fontFamily: 'helvetica-regular',
    marginLeft: 5
  },
  cameraImg: {
      color: 'white',
      marginRight: 5
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
                            <CameraEnhanceIcon className={classes.cameraImg}/>
                            <Link to='/parcours' style={{ textDecoration: 'none', color:'#B76E22' }}>
                                <Typography
                                    variant="body1"
                                    className={classes.text}
                                >
                                    {`${navStateRedux.firstLevel} /`}
                                </Typography>
                            </Link>
                            <Typography
                                variant="body1"
                                className={classes.textSecondNav}
                            >
                                {`${navStateRedux.secondLevel}`}
                            </Typography>
                    </div>
                ) : (
                    <div className={`${classes.mainContainer} ${classes.mainContainerMobile}`}>
                        <CameraEnhanceIcon className={classes.cameraImg}/>
                        <Link to='/parcours' style={{ textDecoration: 'none', color:'#B76E22' }}>
                            <Typography
                                variant="h6"
                                className={classes.text}
                            >
                                {`${navStateRedux.firstLevel} /`}
                            </Typography>
                        </Link>
                        <Typography
                            variant="h6"
                            className={classes.textSecondNav}
                        >
                            {`${navStateRedux.secondLevel}`}
                        </Typography>
                    </div>
                )
            }
      </Media>
    )
  }
}

const mapStateToProps = (state) => {
    console.log('state : ', state.nav)
  return ({
    navStateRedux: state.nav.nav
  })
}

export default withStyles(styles)(connect(mapStateToProps)(Breadcrumb))


