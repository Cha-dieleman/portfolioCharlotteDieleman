import React from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  mainContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'yellow'
  }
})

class DataPark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes } = this.props

    return (
        <div className={classes.mainContainer} style={{width: '100%', height: '100%'}}>
        data Table
        </div>
    )
  }
}

export default withStyles(styles)(withRouter(DataPark))