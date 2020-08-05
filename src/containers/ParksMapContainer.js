import React from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'

import Map from '../globalComponents/Map'
import EnConstruction from '../globalComponents/EnConstruction'
import { dataMock } from '../back/dataMock'
import Header from '../globalComponents/Header'
import Footer from '../globalComponents/Footer'

import { setNav } from '../actions'

const styles = () => ({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

class ParksMapContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataParks: null
        }
    }


    componentDidMount() {
        this.setState({ dataParks:  dataMock})
        setNav({
            firstLevel: 'home',
            secondLevel: 'parksMap',
            thirdLevel: null
        })
        window.scrollTo(0, 0)
    }

    render() {
        const { classes } = this.props
        const { dataParks } = this.state
        

        return (
            <div>
                {
                    dataParks ? (
                        <Media query={{ maxWidth: 1024 }}>
                        {(matches) =>
                            matches ? (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <Map data={dataParks} />
                                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                        <Footer />
                                    </div>
                                </div>
                            ) : (
                                <div className={classes.mainContainer}>
                                    <Header />
                                    <Map data={dataParks} />
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

export default withStyles(styles)(connect(mapStateToProps)(ParksMapContainer))