import React from 'react'
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

class GardensList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillUnmount() {
        getSelectedPark(null)
    }

    render() {
        const { classes, selectedParkNameRedux } = this.props
        let data = dataMock.features
        if(selectedParkNameRedux){
            const parkNameSelected = selectedParkNameRedux.split(' - ')
            data.map(park => {
                if(park.properties.nom === parkNameSelected[0]){
                    data=[park]
                }
                return null
            })
        }
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
                        <EnConstruction message='Section en cours de construction, repassez plus tard...' displayButton/>
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

export default withStyles(styles)(connect(mapStateToProps)(GardensList))