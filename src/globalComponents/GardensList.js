import React from 'react'
// import { Link } from 'react-router-dom'
import Media from 'react-media'
import reactId from 'react-id-generator'

import { withStyles } from '@material-ui/core/styles'

import GardenCard from './GardenCard'
import { dataMock } from '../back/dataMock'

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
        }
    }

    render() {
        const { classes } = this.props
        const data = dataMock.features
        console.log('ici', data)
        return (
            <Media query={{ maxWidth: 1024 }}>
                {(matches) =>
                    matches ? (
                        <div className={classes.mainContainer}>
                            {data.map(data => {
                                return (
                                    <div key={reactId()}>
                                        <GardenCard data={data}/>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className={`${classes.mainContainer} ${classes.mainContainerDesktop}`}>
                            {data.map(data => {
                                return (
                                    <div key={reactId()}>
                                        <GardenCard data={data}/>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default withStyles(styles)(GardensListContainer)