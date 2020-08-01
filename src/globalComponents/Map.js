import React from 'react'
import Media from 'react-media'
import ReactDOMServer from "react-dom/server"

import CardPark from '../globalComponents/CardPark'

class ParkMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        dataMapState: null
    }
  }

  componentDidMount() {
    const { data } = this.props
   
    let sortData = []
    data.features.map(feature => {
        let objFeature = {}
        objFeature.prop = feature.properties
        //tri des coord:
        const TableOfDatasetCoord = feature.geometry.coordinates
        let newTableOfDatasetCoord = []
        TableOfDatasetCoord.map(dataset => {
            dataset.map(coord => {
                let roundNumbers = []
                coord.map(number => {
                    roundNumbers.push(Math.round(number* 1000000)/1000000)
                })
                newTableOfDatasetCoord.push(roundNumbers.reverse())
            })
        })
        objFeature.coord = newTableOfDatasetCoord
        sortData.push(objFeature)
    })
    
    
    
    const L = window.L
    const mymap = L.map('mapid').setView([45.757614, 4.831720], 14)
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
    const CustomReactPopup = () => {
        return (
          <div style={{ fontSize: "24px", color: "black" }}>
            <p>A pretty React Popup</p>
          </div>
        );
      };
    sortData.map((park, index) =>{
        const marker = L.marker(park.coord[0], {title : park.prop.nom, draggable : 'true'}).bindPopup(ReactDOMServer.renderToString(<CustomReactPopup />)).addTo(mymap)
    })

    sortData.map(park =>{
        const polygone = L.polyline(park.coord, {
            color: '#098c12',
            fill: true,
            fillColor: '#098c12',
            fillOpacity: .1
          }).addTo(mymap)
    })

    

    // L.control.layers({
    //   'Plan' : mainLayer,
    //   'Vue satellite'  : layerSatellite
    // }).addTo(mymap)
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