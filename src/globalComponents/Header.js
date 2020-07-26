import React from 'react'
import Media from 'react-media'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco'

import Breadcrumb from './Breadcrumb'


const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#8FA3B4'
  },
  mainContainerDesktop: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#8FA3B4'
  },
  flexLogo: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px 0px 5px'
  },
  flexLogoDesktop: {
    padding: '20px 0px 20px 20px'
  },
  logoText: {
    color: 'white',
    fontFamily: 'helvetica-regular'
  },
  logoImg: {
    width: 50,
    height: 'auto',
    color: 'white'
  }
})

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes } = this.props

    return (
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
            matches ? (
                <div className={classes.mainContainer}>
                    <div className={classes.flexLogo}>
                        <EcoIcon className={classes.logoImg}/>
                        <Typography
                            variant="h5"
                            className={classes.logoText}
                        >
                            GreenCityKid
                        </Typography>
                    </div>
                    <Breadcrumb />
               </div>
            ) : (
                <div className={classes.mainContainerDesktop}>
                    <div className={`${classes.flexLogo} ${classes.flexLogoDesktop}`}>
                        <EcoIcon className={classes.logoImg}/>
                        <Typography
                            variant="h5"
                            className={classes.logoText}
                        >
                            GreenCityKid
                        </Typography>
                    </div>
                    <Breadcrumb />
                </div>
            )
          }
        </Media>
    )
  }
}

// export default withRouter(withStyles(styles)(connect(mapStateToProps)(Homepage)))
export default withStyles(styles)(Header)


