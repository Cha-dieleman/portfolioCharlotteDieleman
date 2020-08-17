import React from 'react'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import TableToCustomize from './TableToCustomize'
import { orderData } from './ParkDataConf'
import dataParkImg from '../static/images/dataParkImg.jpg'

const styles = () => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ParkName: {
    color: '#B76E22',
    fontFamily: 'helvetica-regular',
    fontStyle: 'italic',
    padding: `0px 0px 0px 20px`
  },
  ParkNameDesktop: {
    padding:0,
    marginBottom : 10,
    marginTop : 10
  }
})

class ParkData extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
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
            <div style={{width: '50vw', height: '85vh', overflowY: 'scroll',  boxSizing: 'border-box', padding: 40}}>
                <div 
                  style={{ width: '100%', height: 400, padding: 0, position: 'relative',zIndex: 1000, backgroundImage: `url(${dataParkImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                >
                  <div style={{width: '100%', height: 'auto', backgroundColor: 'rgba(255, 255, 255, .9', position: 'absolute', top: 0, left: 0, zIndex: 2000, padding: '0px 20px', boxSizing: 'border-box'}}>
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
                </div>
              </div>
              <TableToCustomize data={dataForTableToCustomize}/>
            </div>
          )
        }
      </Media>
    )
  }
}
  
export default withStyles(styles)(ParkData)