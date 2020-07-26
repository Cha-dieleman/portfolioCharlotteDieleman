import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Media from 'react-media'
import reactId from 'react-id-generator'

import { withStyles } from '@material-ui/core/styles'

import GardenCard from './GardenCard'
import { dataMock } from '../back/dataMock'
import AutoSuggest from './Autocomplete'
import EnConstruction from '../globalComponents/EnConstruction'
import { getSelectedPark } from '../actions'

const styles = () => ({
  mainContainer: {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainerDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

class GardensListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValueAutoSuggest: null
        }
    }

    componentWillUnmount() {
        getSelectedPark(null)
    }

    render() {
        const { classes, selectedParkNameRedux } = this.props
        const { inputValueAutoSuggest } = this.state
        let data = dataMock.features
        const dataChoosenByAutosuggest = []
        if(selectedParkNameRedux){
            const parkNameSelected = selectedParkNameRedux.split(' - ')
            data.map(park => {
                const name= park.properties.nom
                if(park.properties.nom === parkNameSelected[0]){
                    console.log('idem')
                    data=[park]
                }
                return null
            })
        }
        console.log('yes', data)
        return (
            <div>
                {
                    data ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div>
                                    <AutoSuggest data={data}/>
                                    <div className={classes.mainContainer}>
                                        {data.map(data => {
                                            return (
                                                <div key={reactId()}>
                                                    <GardenCard data={data}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <AutoSuggest data={data}/>
                                    <div className={`${classes.mainContainer} ${classes.mainContainerDesktop}`}>
                                        {data.map(park => {
                                            return (
                                                <div key={reactId()}>
                                                    <GardenCard data={park}/>
                                                </div>
                                            )
                                        })}
                                    </div>
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

export default withStyles(styles)(connect(mapStateToProps)(GardensListContainer))