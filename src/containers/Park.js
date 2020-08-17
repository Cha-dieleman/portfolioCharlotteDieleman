import React from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'

import ParkData from '../globalComponents/ParkData'
import EnConstruction from '../globalComponents/EnConstruction'
import { dataMock } from '../back/dataMock'
import Header from '../globalComponents/Header'
import Footer from '../globalComponents/Footer'
import MapLeafletReact from '../globalComponents/MapLeafletReact'
import dataParkImg from '../static/images/dataParkImg.jpg'

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
        height: '85vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative'
    }
})

class Park extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataParkState: null,
            dataToMap: null
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
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps, prevState) {
        const { match } = this.props
        const { dataParkState } = this.state
        if(prevState.dataParkState !== dataParkState){
            const dataToMap = [
                {
                    coordinates: dataParkState.geometry.coordinates[0],
                    properties: dataParkState.properties
                }
            ]
            // tri des coordonnées:
            let newValuesOfCoordinates = []
            dataToMap[0].coordinates.map(dataset => {
                // dataset = [ 4.824522066226018, 45.738152723960795 ]
                let roundNumbers = []
                dataset.map(coord => {
                     // coord = 4.824522066226018
                    roundNumbers.push(Math.round(coord* 1000000)/1000000)
                    return null
                })
                newValuesOfCoordinates.push(roundNumbers.reverse())
                return null
            })
            dataToMap[0].coordinates = newValuesOfCoordinates
            this.setState({ dataToMap: dataToMap })
        console.log('match', match.path.split('/'))
            let setSecondLevel = match.path.split('/')
            if(setSecondLevel[1] === 'parksList'){
                setSecondLevel = 'parksList'
            } else {
                setSecondLevel = 'parksMap'
            }
            setNav({
                firstLevel: 'home',
                secondLevel: setSecondLevel,
                thirdLevel: dataParkState.properties.nom
            })
        }

    }

    render() {
        const { classes } = this.props
        const { dataParkState, dataToMap } = this.state
        
        return (
            <div>
                {
                    dataToMap ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <div className={classes.containerBothViews}>
                                        <ParkData parentData={dataParkState} />
                                        <MapLeafletReact dataParks={dataToMap} dataParkCenterPos={dataToMap} navLocatedDataPark={true} />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                        <Footer />
                                    </div>
                                </div>
                            ) : (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <div className={classes.containerBothViewsDesktop}>
                                        <img 
                                            src={dataParkImg}
                                            alt='télécharger en pdf'
                                            style={{ width: '30%', height: 'auto', padding: 0, left: '35%', position: 'absolute', top: '20%', zIndex: 1000 }}
                                        />
                                        <ParkData parentData={dataParkState} locatedMapInPark={true} />
                                        <MapLeafletReact dataParks={dataToMap} dataParkCenterPos={dataToMap} navLocatedDataPark={true} locatedMapInPark={true} />
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