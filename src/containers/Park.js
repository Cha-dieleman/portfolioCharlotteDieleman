import React from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'

import ParkData from '../globalComponents/ParkData'
import ParkMap from '../globalComponents/ParkMap'
import EnConstruction from '../globalComponents/EnConstruction'
import { dataMock } from '../back/dataMock'
import Header from '../globalComponents/Header'
import Footer from '../globalComponents/Footer'

import { setNav } from '../actions'

const styles = () => ({
    mainContainer: {
        width: '100vw',
        height: 'auto',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBothViews: {
        width: '100vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBothViewsDesktop: {
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
    }
})

class Park extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataParkState: null
        }
    }


    componentDidMount() {
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        const { match } = this.props
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        // console.log('match', match)
        // console.log('uid', match.params.nom)
        // console.log('dataM', dataMock.features[0])
        dataMock.features.map(park => {
            if(match.params.nom === park.properties.nom){
                this.setState({ dataParkState: park })
            }
            return null
        })
        
    }

    componentDidUpdate(prevProps, prevState) {
        const { dataParkState } = this.state
        if(prevState.dataParkState !== dataParkState){
            setNav({
                firstLevel: 'home',
                secondLevel: 'parksList',
                thirdLevel: dataParkState.properties.nom
            })
        }

    }

    render() {
        const { classes } = this.props
        const { dataParkState } = this.state
        return (
            <div>
                {
                    dataParkState ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <div className={classes.containerBothViews}>
                                        <ParkData parentData={dataParkState} />
                                        <ParkMap parentData={dataParkState} />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                        <Footer />
                                    </div>
                                </div>
                            ) : (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <div className={classes.containerBothViewsDesktop}>
                                        <ParkData parentData={dataParkState} />
                                        <ParkMap parentData={dataParkState} />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                                        <Footer />
                                    </div>
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

export default withStyles(styles)(connect(mapStateToProps)(Park))