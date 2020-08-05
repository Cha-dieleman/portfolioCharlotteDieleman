import React from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'

import EnConstruction from '../globalComponents/EnConstruction'
import { dataMockSorted } from '../back/dataMock'
import Header from '../globalComponents/Header'
import Footer from '../globalComponents/Footer'

import { setNav } from '../actions'
import CheckboxComponent from '../globalComponents/CheckboxComponent'
import MapLeafletReact from '../globalComponents/MapLeafletReact'

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
        boxSizing: 'border-box'
    }
})

class MapContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataParks: null,
            statusCheckbox: {
                checkedParcs: true,
                checkedJardins: true,
                checkedSquares: true,
                checkedBerges: true,
                checkedVoiesVertes: true,
                checkedDogs: false,
                checkedEspaceDogs: false,
                checkedAireDeJeux: false,
                checkedLabelFamily: false,
                checkedAll: false
            }
        }
    }

    componentDidMount() {
        this.setState({ dataParks: dataMockSorted})
        window.scrollTo(0, 0)
        setNav({
            firstLevel: 'home',
            secondLevel: 'parksMap',
            thirdLevel: null
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        const { statusCheckbox } = this.state
        let newDataParks = []
        if(prevState.statusCheckbox !== statusCheckbox){
            if(statusCheckbox.checkedParcs === true){
                dataMockSorted.map(parc => {
                    if(parc.properties.nom.includes('Parc')){
                        newDataParks.push(parc)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedJardins === true){
                dataMockSorted.map(jardin => {
                    if(jardin.properties.nom.includes('Jardin')){
                        newDataParks.push(jardin)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedSquares === true){
                dataMockSorted.map(square => {
                    if(square.properties.nom.includes('Square')){
                        newDataParks.push(square)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedBerges === true){
                dataMockSorted.map(berge => {
                    const str = berge.properties.nom
                    if(str.includes("Rives") || str.includes("Berges") || str.includes('Berge')){
                        newDataParks.push(berge)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedVoiesVertes === true){
                dataMockSorted.map(voie => {
                    if(voie.properties.nom.includes('Voie')){
                        newDataParks.push(voie)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedDogs === true){
                dataMockSorted.map(parc => {
                    if(parc.properties.chien === 'Oui'){
                        newDataParks.push(parc)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedEspaceDogs === true){
                dataMockSorted.map(parc => {
                    if(parc.properties.esp_can === 'Oui'){
                        newDataParks.push(parc)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedAireDeJeux === true){
                dataMockSorted.map(parc => {
                    if(parc.properties.type_equip.includes('Aire') || parc.properties.type_equip.includes('ludique')){
                        newDataParks.push(parc)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedLabelFamily === true){
                dataMockSorted.map(parc => {
                    if(parc.properties.labelFamille === 'Oui'){
                        newDataParks.push(parc)
                    }
                    return null
                })
            }
            if(statusCheckbox.checkedAll === true){
                dataMockSorted.map(parc => {
                    newDataParks.push(parc)
                    return null
                })
            }
            this.setState({ dataParks: newDataParks})
        }
    }

    getStatusBoxChecked = (status) => {
        this.setState({ statusCheckbox: status})
    }
    
    render() {
        const { dataParks, statusCheckbox } = this.state
    console.log('status', statusCheckbox)

        const { classes } = this.props
        return (
            <div>
                {
                    dataParks ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <div className={classes.containerBothViews}>
                                        <CheckboxComponent statusChecks={(status) => this.getStatusBoxChecked(status)}/>
                                        <MapLeafletReact dataParks={dataParks}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                        <Footer />
                                    </div>
                                </div>
                            ) : (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <div className={classes.containerBothViewsDesktop}>
                                        <CheckboxComponent statusChecks={(status) => this.getStatusBoxChecked(status)}/>
                                        <MapLeafletReact dataParks={dataParks}/>
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

export default withStyles(styles)(connect(mapStateToProps)(MapContainer))