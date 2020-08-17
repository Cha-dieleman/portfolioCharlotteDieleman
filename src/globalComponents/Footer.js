import React from 'react'
import { Link } from 'react-router-dom'
import Media from 'react-media'

import { Typography, Tooltip } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'

const styles = () => ({
  devByContainer: {
    height: '5vh',
    margin: `10px 0px 10px 0px`,
    opacity: .7,
    '&:hover': {
      opacity: 1
    }
  },
  devByContainerDesktop: {
    paddingRight: 20,
    margin: 0,
    height: '5vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  typoDevBy: {
    fontSize: 13,
    width: 'auto',
    margin: 0
  }
})

const theme = createMuiTheme()

const WhiteTooltip = withStyles({
  tooltip: {
    color: '#818386',
    backgroundColor: 'white',
    border: 'solid .5px #AEB0B3',
    boxShadow: '2px 2px 5px #AEB0B3',
  }
})(Tooltip)

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { classes } = this.props
        
        return (
          <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <Media query={{ maxWidth: 1024 }}>
                {(matches) =>
                    matches ? (
                      <div className={classes.devByContainer}>
                        <Link to='/' style={{ textDecoration: 'none', color:'#B76E22' }}>
                          <Typography
                          className={classes.typoDevBy}
                          align='right'
                          >
                              En cours de développement - Charlotte Dieleman
                          </Typography>
                        </Link>
                      </div>
                    ) : (
                            <div className={`${classes.devByContainer} ${classes.devByContainerDesktop}`}>
                                <MuiThemeProvider theme={theme}>
                                <WhiteTooltip
                                    title='Revenir au portfolio'
                                    placement="top-end"
                                >
                                <Link to='/' style={{ textDecoration: 'none', color:'#B76E22' }}>
                                    <Typography
                                    variant="body2"
                                    className={classes.typoDevBy}
                                    align='right'
                                    >
                                        En cours de développement - Charlotte Dieleman
                                    </Typography>
                                    </Link>
                                </WhiteTooltip>
                                </MuiThemeProvider>
                            </div>
                    )
                }
            </Media>
             </div>
        )
    }
}

export default withStyles(styles)(Footer)

