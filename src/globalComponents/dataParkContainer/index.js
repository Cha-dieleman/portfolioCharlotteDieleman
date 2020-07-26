import React from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'

import DataPark from './DataPark'
import ParkMap from './ParkMap'
import EnConstruction from '../EnConstruction'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainerDesktop: {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'stretch',
    alignItems: 'stretch'
  }
})

class dataParkContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { classes } = this.props
        const data = 'coucou'
        return (
            <div>
                {
                    data ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div className={classes.mainContainer}>
                                    <DataPark />
                                    <ParkMap />
                                </div>
                            ) : (
                                <div className={classes.mainContainerDesktop}>
                                    <DataPark />
                                    <ParkMap />
                                </div>
                            )
                        }
                    </Media>
                    ) : (
                        <EnConstruction />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return ({
      selectedParkNameRedux: state.selectedPark.name
  })
}

export default withStyles(styles)(connect(mapStateToProps)(dataParkContainer))