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
    const mymap = L.map('mapid').setView([45.758520, 4.848700], 20)
    const mainLayer2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 24,
      tileSize: 512,
      zoomOffset: -1,
    })

    const mainLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap)

    const marker = L.marker([45.758520, 4.848700], {title : "Parc de la tête d'or", draggable : 'true'}).bindPopup("<div>La cancoillotte</div>").addTo(mymap)
    const numberTest = Math.round(45.758520968082451 * 10000000)/10000000
    console.log('numberTest', numberTest)
  //   const circle2 = L.circle([45.777935, 4.852853], 500, {
  //     'color': 'orange',
  //     'fill': true,
  //     'fillColor': 'green',
  //     'fillOpacity': 0.5
  // }).addTo(mymap)

  // const groupLayer = L.layerGroup([circle2, marker])
  

const polygonePark = L.polyline(
  [[45.758520968082451,4.848700268292207],[45.758443867618183,4.84871494089085],[45.758454341620059,4.84885132558816],[45.758533937838251,4.848838150332716],[45.758520968082451,4.848700268292207]]
  , {
    color: 'gray',
    fill: true,
    fillColor: 'blue',
    fillOpacity: .1
}).addTo(mymap)

const polygone = L.polyline([
  [45.758520968082451, 4.848700268292207],
  [45.758443867618183, 4.84871494089085],
  [45.758454341620059, 4.84885132558816],
  [45.758533937838251, 4.848838150332716],
  [45.758520968082451, 4.848700268292207]
], {
  color: '#098c12',
  fill: true,
  fillColor: 'blue',
  fillOpacity: .1
}).addTo(mymap)

// const polygone2 = L.polyline([
//   [47.318398, 1.886464],
//   [47.318398, 2.069846],
//   [46.722971, 3.5862335],
//   [46.000000, 3.069346],
//   [46.000000, 2.886464],
//   [46.722971, 1.4137665],
//   [47.318398, 1.886464]

// ], {
//   color: 'gray',
//   fill: true,
//   fillColor: 'blue',
//   fillOpacity: .1
// }).addTo(mymap)

// L.control.layers({
//   'Main' : mainLayer,
//   'Main2'  : mainLayer2
// },{
//   'Houses' : groupLayer,
//   'Polygone' : polygone
// }).addTo(mymap)
  }

  render() {
    // const { classes } = this.props
    const data = true

    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'90%', height:'auto'}}>
          {
              data ? (
                  <Media query={{ maxWidth: 1024 }}>
                  {(matches) =>
                      matches ? (
                        <div id="mapid" style={{width: '80%', height: 300}}></div>
                      ) : (
                        <div id="mapid" style={{width: '80%', height: 700}}></div>
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