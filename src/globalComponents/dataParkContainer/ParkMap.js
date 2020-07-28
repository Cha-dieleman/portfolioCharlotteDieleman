import React from 'react'
import Media from 'react-media'

import { withStyles } from '@material-ui/core/styles'
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

  componentDidMount() {
    const L = window.L
    const mymap = L.map('mapid').setView([45.777935, 4.852853], 13)
    const mainLayer2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 20,
      tileSize: 512,
      zoomOffset: -1,
    })

    const mainLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap)

    const marker = L.marker([45.777935, 4.852853], {title : "Parc de la tête d'or", draggable : 'true'}).bindPopup("<div>La cancoillotte</div>").addTo(mymap)
    const circle2 = L.circle([45.777935, 4.852853], 500, {
      'color': 'orange',
      'fill': true,
      'fillColor': 'green',
      'fillOpacity': 0.5
  }).addTo(mymap)

  const groupLayer = L.layerGroup([circle2, marker])
  

const polygonePark = L.polyline(
  [ [ 4.848700268292207, 45.758520968082451 ], [ 4.84871494089085, 45.758443867618183 ], [ 4.84885132558816, 45.758454341620059 ], [ 4.848838150332716, 45.758533937838251 ], [ 4.848700268292207, 45.758520968082451 ] ]
  , {
    color: 'gray',
    fill: true,
    fillColor: 'blue',
    fillOpacity: .1
})

const polygone = L.polyline([
  [47.318398, -0.886464],
  [47.318398, 0.069346],
  [46.722971, 0.5862335],
  [46.000000, 0.069346],
  [46.000000, -0.886464],
  [46.722971, -1.4137665],
  [47.318398, -0.886464]

], {
  color: 'gray',
  fill: true,
  fillColor: 'blue',
  fillOpacity: .1
}).addTo(mymap)

L.control.layers({
  'Main' : mainLayer,
  'Main2'  : mainLayer2
},{
  'Houses' : groupLayer,
  'Polygone' : polygonePark
}).addTo(mymap)
  }

  render() {
    // const { classes } = this.props
    const data = true

    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'auto'}}>
          {
              data ? (
                  <Media query={{ maxWidth: 1024 }}>
                  {(matches) =>
                      matches ? (
                        <div id="mapid" style={{width: 700, height: 700}}></div>
                      ) : (
                        <div id="mapid" style={{width: 700, height: 700}}></div>
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

export default withStyles(styles)(ParkMap)