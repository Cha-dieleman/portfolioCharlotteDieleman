import React from 'react'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import TableToCustomize from './TableToCustomize'
import { orderData } from './DataParkConf'
import dataParkImg from '../static/images/dataParkImg.jpg'


const styles = () => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
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

class ParkData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes, parentData } = this.props
    
    const dataForTableToCustomize = orderData(parentData.properties)

    return (
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
              matches ? (
                <div className={classes.mainContainer} style={{width: '100vw', height: 'auto', paddingBottom: 10}}>
                  <Typography
                      variant="h4"
                      className={classes.ParkName}
                  >
                      {`${parentData.properties.nom} :`}
                  </Typography>
                  <Typography
                      variant="h5"
                      className={classes.ParkName}
                  >
                  {`${parentData.properties.numvoie} ${parentData.properties.voie}`}
                  <br/>
                  {`${parentData.properties.codepost} ${parentData.properties.commune}`}
                  </Typography>
                  <TableToCustomize data={dataForTableToCustomize} mobileViewDesign/>
                  <img 
                      src={dataParkImg}
                      alt='télécharger en pdf'
                      style={{ width: '90vw', height: 'auto', marginBottom: 20, padding: `0px 0px 0px 20px` }}
                  />
                </div>
              ) : (
                <div className={classes.mainContainer} style={{width: '50vw', height: '80vh', overflowY: 'scroll'}}>
                <div style={{width: '100%', height: '100%'}}>
                <div style={{maxWidth: '100%', height: 275, overflow: 'hidden', display: 'flex', alignItems: 'flex-end'}}>
                  <img 
                      src={dataParkImg}
                      alt='télécharger en pdf'
                      style={{ width: '100%', height: 'auto', padding: 0, marginBottom: 20 }}
                  />
                </div>
                  <Typography
                      variant="h3"
                      className={`${classes.ParkName} ${classes.ParkNameDesktop}`}
                  >
                      {`${parentData.properties.nom} :`}
                  </Typography>
                  <Typography
                      variant="h4"
                      className={`${classes.ParkName} ${classes.ParkNameDesktop}`}
                  >
                  {`${parentData.properties.numvoie} ${parentData.properties.voie}`}
                  <br/>
                  {`${parentData.properties.codepost} ${parentData.properties.commune}`}
                  </Typography>
                  <TableToCustomize data={dataForTableToCustomize}/>
                  
                  </div>
              </div>
            )
          }
        </Media>
    )
  }
}
  
export default withStyles(styles)(ParkData)