import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import TableToCustomize from '../TableToCustomize'
import EnConstruction from '../EnConstruction'
import { orderData } from './confDataPark'
import dataParkImg from '../../static/images/dataParkImg.jpg'


const styles = () => ({
  mainContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: '#8fa3b4'
  },
  ParkName: {
    color: '#B76E22',
    marginBottom: 20,
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic'


  }
})

class DataPark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes, dataParkSelected } = this.props
    console.log("hh", dataParkSelected.properties)
    
    const dataForTableToCustomize = orderData(dataParkSelected.properties)
    console.log("dataPark", dataForTableToCustomize)

    return (
        <div className={classes.mainContainer} style={{width: '100%', height: '100%', padding: 10}}>
            {
                dataParkSelected === null ? (
                    <EnConstruction />
                  ) : (
                    <div>
                      <Typography
                          variant="h4"
                          className={classes.ParkName}
                      >
                          {`${dataParkSelected.properties.nom} :`}
                      </Typography>
                      <img 
                          src={dataParkImg}
                          alt='télécharger en pdf'
                          style={{ width: '50%', height: 'auto', marginBottom: 20 }}
                      />
                      <TableToCustomize data={dataForTableToCustomize}/>
                    </div>
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
  
export default withStyles(styles)(withRouter(connect(mapStateToProps)(DataPark)))