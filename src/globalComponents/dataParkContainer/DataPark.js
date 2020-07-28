import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import TableToCustomize from '../TableToCustomize'
import EnConstruction from '../EnConstruction'
import { orderData } from './confDataPark'
import dataParkImg from '../../static/images/dataParkImg.jpg'


const styles = () => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: '#8fa3b4',
  },
  ParkName: {
    color: '#B76E22',
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic',
    padding: `0px 0px 0px 20px`
  },
  ParkNameDesktop: {
    padding: `0px 0px 0px 60px`
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
    
    const dataForTableToCustomize = orderData(dataParkSelected.properties)

    return (
      <div style={{width: '100vw', height: 'auto'}}>
          {
            dataParkSelected !== null ? (
                  <Media query={{ maxWidth: 1024 }}>
                  {(matches) =>
                      matches ? (
                        <div className={classes.mainContainer} style={{width: '100vw', height: 'auto', paddingBottom: 10}}>
                          <Typography
                              variant="h4"
                              className={classes.ParkName}
                          >
                              {`${dataParkSelected.properties.nom} :`}
                          </Typography>
                          <Typography
                              variant="h5"
                              className={classes.ParkName}
                          >
                          {`${dataParkSelected.properties.numvoie} ${dataParkSelected.properties.voie}`}
                          <br/>
                          {`${dataParkSelected.properties.codepost} ${dataParkSelected.properties.commune}`}
                          </Typography>
                          <TableToCustomize data={dataForTableToCustomize} mobileViewDesign/>
                          <img 
                              src={dataParkImg}
                              alt='télécharger en pdf'
                              style={{ width: '90vw', height: 'auto', marginBottom: 20, padding: `0px 0px 0px 20px` }}
                          />
                        </div>
                      ) : (
                        <div className={classes.mainContainer} style={{width: '50vw', height: 'auto'}}>
                          <Typography
                              variant="h3"
                              className={`${classes.ParkName} ${classes.ParkNameDesktop}`}
                          >
                              {`${dataParkSelected.properties.nom} :`}
                          </Typography>
                          <Typography
                              variant="h4"
                              className={`${classes.ParkName} ${classes.ParkNameDesktop}`}
                          >
                          {`${dataParkSelected.properties.numvoie} ${dataParkSelected.properties.voie}`}
                          <br/>
                          {`${dataParkSelected.properties.codepost} ${dataParkSelected.properties.commune}`}
                          </Typography>
                          <TableToCustomize data={dataForTableToCustomize}/>
                          <img 
                              src={dataParkImg}
                              alt='télécharger en pdf'
                              style={{ width: '80%', height: 'auto', padding:`0px 0px 0px 60px`, marginBottom: 20 }}
                          />
                      </div>
                      )
                  }
              </Media>
              ) : (
                  <EnConstruction message='Section en cours de construction, repassez plus tard...'/>
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