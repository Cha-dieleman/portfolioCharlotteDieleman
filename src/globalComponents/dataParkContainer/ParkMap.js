import React from 'react'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'
import mapLyonImg from '../../static/images/mapLyonImg.jpg'
import EnConstruction from '../EnConstruction'

const styles = () => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#8fa3b4'
  }
})

class ParkMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes } = this.props
    // En attendant de lié le composant aux data :
    const dataParkSelected = true

    return (
      <div>
          {
            dataParkSelected !== null ? (
                  <Media query={{ maxWidth: 1024 }}>
                  {(matches) =>
                      matches ? (
                        <div className={classes.mainContainer} style={{width: '100%', height: 'auto', padding: `20px 0px`}}>
                        <EnConstruction message='Map en cours de construction, repassez plus tard...'/>
                        </div>
                      ) : (
                        <div className={classes.mainContainer} style={{width: '50vw', height: '100vh'}}>
                        <EnConstruction message='Map en cours de construction, repassez plus tard...'/>
                        </div>
                      )
                  }
              </Media>
              ) : (
                  <EnConstruction message='Map en cours de construction, repassez plus tard...'/>
              )
          }
      </div>
    )
  }
}

export default withStyles(styles)(ParkMap)