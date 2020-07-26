import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import mapLyonImg from '../../static/images/mapLyonImg.jpg'

const styles = () => ({
    mainContainer: {
        // backgroundColor: 'pink'
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

    return (
        <div className={classes.mainContainer} style={{width: '100%', height: '100%', padding: 10}}>
        <img 
            src={mapLyonImg}
            alt='télécharger en pdf'
            style={{ width: '100%', height: 'auto' }}
        />
        </div>
    )
  }
}

export default withStyles(styles)(ParkMap)