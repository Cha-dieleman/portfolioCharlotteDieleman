import React from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'
import reactId from 'react-id-generator'

import { withStyles } from '@material-ui/core/styles'

import CardPark from './CardPark'
import { dataMock } from '../back/dataMock'
import AutoSuggest from './Autocomplete'
import EnConstruction from './EnConstruction'
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
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom :30
  }
})

class ParksList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        getSelectedPark(null) // PURGE
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
                                                    <CardPark data={data}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div style={{width: '100vw', height: '85vh', overflowY: 'scroll'}}  id="top">
                                    <AutoSuggest data={data} />
                                    <div className={classes.mainContainerDesktop} id="MainDesk">
                                        {data.map(park => {
                                            return (
                                                <div key={reactId()} style={{width: 340, height: 400, marginRight: 20, marginBottom: 20}}>
                                                    <CardPark data={park}/>
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

export default withStyles(styles)(connect(mapStateToProps)(ParksList))