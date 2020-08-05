import React from 'react'
import Media from 'react-media'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import Header from '../globalComponents/Header'
import ParksList from '../globalComponents/ParksList'
import Footer from '../globalComponents/Footer'
import { setNav, getDataSelectedPark } from '../actions'


const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: '0px 0px 20px 0px',
    boxSizing: 'border-box'
  },
  devByContainer: {
    height: 'auto',
    padding: '0px 20px 20px 0px',
    margin: `30px 0px`
  },
  devByContainerDesktop: {
    padding: '0px 40px 40px 0px'
  },
  typoDevBy: {
    width: 'auto',
    margin: 0
  }
})

class ParksListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        getDataSelectedPark(null) // PURGE
        const { history } = this.props
        history.push('/parksList')
        setNav({
            firstLevel: 'home',
            secondLevel: 'parksList',
            thirdLevel: null
        })
        window.scrollTo(0, 0)
    }
    render() {
        const { classes } = this.props
        
        return (
            <Media query={{ maxWidth: 1024 }}>
                {(matches) =>
                    matches ? (
                        <div className={classes.mainContainer}>
                            <Header />
                            <ParksList />
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                <Footer />
                            </div>
                        </div>
                    ) : (
                        <div className={classes.mainContainer}>
                            <Header />
                            <ParksList />
                            <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                                <Footer />
                            </div>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default withStyles(styles)(withRouter(ParksListContainer))

