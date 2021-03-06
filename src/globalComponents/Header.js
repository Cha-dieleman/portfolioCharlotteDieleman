import React from 'react'
import Media from 'react-media'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco'

import Breadcrumb from './Breadcrumb'


const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#8FA3B4'
  },
  mainContainerDesktop: {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8FA3B4'
  },
  flexLogo: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0px 0px 10px'
  },
  flexLogoDesktop: {
    padding: 0
  },
  logoText: {
    color: 'white',
    fontFamily: 'helvetica-regular'
  },
  logoImg: {
    width: 30,
    height: 'auto',
    color: 'white'
  },
  logoImgDesktop: {
    width: 50
  }
})

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return (
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
            matches ? (
                <div className={classes.mainContainer}>
                    <Link to='/home' style={{ textDecoration: 'none', color:'#B76E22' }}>
                        <div className={classes.flexLogo}>
                            <EcoIcon className={classes.logoImg}/>
                            <Typography
                                variant="h5"
                                className={classes.logoText}
                            >
                                GreenCityKid
                            </Typography>
                        </div>
                    </Link>
                    <Breadcrumb />
               </div>
            ) : (
                <div className={classes.mainContainerDesktop}>
                    <Link to='/home' style={{ textDecoration: 'none', color:'#B76E22' }}>
                        <div className={`${classes.flexLogo} ${classes.flexLogoDesktop}`}>
                            <EcoIcon className={`${classes.logoImg} ${classes.logoImgDesktop}`}/>
                            <Typography
                                variant="h4"
                                className={classes.logoText}
                            >
                                GreenCityKid
                            </Typography>
                        </div>
                    </Link>
                    <Breadcrumb />
                </div>
            )
          }
        </Media>
    )
  }
}

export default withStyles(styles)(Header)


