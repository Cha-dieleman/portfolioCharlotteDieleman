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
    alignItems: 'center',
  },
  mainContainerDesktop: {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

class dataParkContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { classes, dataParkSelected } = this.props
        return (
            <div>
                {
                    dataParkSelected ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div className={classes.mainContainer}>
                                    <DataPark parentData={dataParkSelected} />
                                    <ParkMap parentData={dataParkSelected} />
                                </div>
                            ) : (
                                <div className={classes.mainContainerDesktop}>
                                    <DataPark parentData={dataParkSelected} />
                                    <ParkMap parentData={dataParkSelected} />
                                </div>
                            )
                        }
                    </Media>
                    ) : (
                        <EnConstruction message='Section en cours de construction, repassez plus tard...' displayButton/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return ({
    dataParkSelected: state.dataSelectedPark.data
  })
}

export default withStyles(styles)(connect(mapStateToProps)(dataParkContainer))