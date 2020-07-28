import React from 'react'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Typography, Tooltip } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'

import Header from '../globalComponents/Header'
import GardensList from '../globalComponents/GardensList'
import DataParkContainer from '../globalComponents/dataParkContainer'
import { setNav, getSelectedPark, getDataSelectedPark } from '../actions'


const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  devByContainer: {
    height: 'auto',
    padding: '0px 5px 5px 0px',
  },
  devByContainerDesktop: {
    padding: '0px 20px 20px 0px',
  },
  typoDevBy: {
    width: 'auto'
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

class ParksContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        getSelectedPark(null)
        getDataSelectedPark(null)
        const { history } = this.props
        history.push('/parksList')
    }

    handleClick = () => {
        const { history } = this.props
        history.push('/home')
    }

    render() {
        const { classes, dataParkSelected } = this.props
        setNav({
            firstLevel: 'home',
            secondLevel: 'parksList'
        })

        return (
            <Media query={{ maxWidth: 1024 }}>
                {(matches) =>
                    matches ? (
                        <div className={classes.mainContainer}>
                            <Header />
                            {
                                dataParkSelected ? <DataParkContainer /> : <GardensList />
                            }
                            <div className={classes.devByContainer}>
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
                        </div>
                    ) : (
                        <div className={classes.mainContainer}>
                            <Header />
                            {
                                dataParkSelected ? <DataParkContainer /> : <GardensList />
                            }
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
                        </div>
                    )
                }
            </Media>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        dataParkSelected: state.dataSelectedPark.data
    })
}

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ParksContainer)))

