import React from 'react'
import Media from 'react-media'

class ParkMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const { parentData } = this.props
    console.log('parentData', parentData)
    const dataToSort = parentData.geometry.coordinates[0]
    const sortData = []
    dataToSort.map(coordinatesArray => {
      const roundNumber = []
      coordinatesArray.map(coordinate => {
        roundNumber.push(Math.round(coordinate* 1000000)/1000000)
      })
      sortData.push(roundNumber.reverse())
    })
    const L = window.L
    const mymap = L.map('mapid').setView(sortData[0], 18)
    const mainLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap)

    const layerSatellite = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
      attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
      bounds: [[-75, -180], [81, 180]],
      minZoom: 2,
      maxZoom: 19,
      apikey: 'choisirgeoportail',
      format: 'image/jpeg',
      style: 'normal'
    })

    const marker = L.marker(sortData[0], {title : "Parc de la tête d'or", draggable : 'true'}).bindPopup("<div>La cancoillotte</div>").addTo(mymap)

    const polygone = L.polyline(sortData, {
      color: '#098c12',
      fill: true,
      fillColor: '#098c12',
      fillOpacity: .1
    }).addTo(mymap)

    L.control.layers({
      'Plan' : mainLayer,
      'Vue satellite'  : layerSatellite
    }).addTo(mymap)
  }

  render() {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'90%', height:'auto', boxSizing: 'border-box'}}>
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
              matches ? (
                <div id="mapid" style={{width: '80%', height: 300}}></div>
              ) : (
                <div id="mapid" style={{width: '80%', height: 700}}></div>
              )
          }
        </Media>
      </div>
    )
  }
}

export default ParkMap