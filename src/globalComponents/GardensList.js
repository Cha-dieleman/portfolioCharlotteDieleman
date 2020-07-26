import React from 'react'
// import { Link } from 'react-router-dom'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'

import GardenCard from './GardenCard'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainerDesktop: {
    flexDirection: 'row',
  },
})

class GardensListContainer extends React.Component {
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
                            <GardenCard />
                            <GardenCard />
                            <GardenCard />
                        </div>
                    ) : (
                        <div className={`${classes.mainContainer} ${classes.mainContainerDesktop}`}>
                            <GardenCard />
                            <GardenCard />
                            <GardenCard />
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default withStyles(styles)(GardensListContainer)