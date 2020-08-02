import React from 'react'
import Media from 'react-media'
import ReactDOMServer from "react-dom/server"

import CustomPoPupMarker from '../globalComponents/CustomPoPupMarker'
import jardinLocationIcon from '../static/images/jardin_location_icon.png'
import parksLocationIcon from '../static/images/parks_location_icon.png'
import squareLocationIcon from '../static/images/square_location_icon.png'
import bergesLocationIcon from '../static/images/berges_location_icon.png'
import voieVerteLocationIcon from '../static/images/voieVerte_location_icon.png'
import pets from '../static/images/pets.png'
import petsPink from '../static/images/petsPink.png'

class ParkMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        zoom: null
    }
  }

  componentDidMount() {
    const { data } = this.props
    const { zoom } = this.state

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
                    return null
                })
                newTableOfDatasetCoord.push(roundNumbers.reverse())
                return null
            })
            return null
        })
        objFeature.coord = newTableOfDatasetCoord
        sortData.push(objFeature)
        return null
    })
    
    const L = window.L
    const mymap = L.map('mapid').setView([45.757614, 4.831720], 14)
    this.setState({ mymap })
    console.log('map', mymap.getZoom())
    const layerPlan = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
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
    
    const getIconMarkerCustom = (iconUrl) => {
        return(
            L.icon({
                iconUrl: iconUrl,
                iconSize: [30,41],
                iconAnchor: [15,41],
                popupAnchor: [0,-41],
            })
        )
    }

    const setNavRedirect = (parkName) => {
        const navRedirect = {
            firstLevel: 'home',
            secondLevel: 'parksList',
            thirdLevel: parkName
        }
        return navRedirect
    }
    
    let arrayLayerGroupGardens = []
    const markersGardensGroup = sortData.map((park) =>{
        // center the marker if possible :
        let lat = 0
        park.coord.map(pos => {
            lat += pos[0]
            return null
        })
        const AVGlat = lat / (park.coord.length)
        let lng = 0
        park.coord.map(pos => {
            lng += pos[1]
            return null
        })
        const AVGlng = lng / (park.coord.length)
        if(park.prop.nom.includes('Jardin')){
            const markerGarden = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(jardinLocationIcon)
            }).addTo(mymap)
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            arrayLayerGroupGardens.push(markerGarden)
        }
        return null
    })
    
    const polygonesGardensGroup = sortData.map(park =>{
        if(park.prop.nom.includes('Jardin')){
            const polygoneGarden = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
            })
            polygoneGarden.on('click', function() {
                mymap.fitBounds(polygoneGarden.getBounds())
            }).addTo(mymap)
              arrayLayerGroupGardens.push(polygoneGarden)
        }
        return null
    })
    
    const layerGroupGardens = L.layerGroup(arrayLayerGroupGardens)


    let arrayLayerGroupParks = []
    const markersParksGroup = sortData.map((park) =>{
        // center the marker if possible :
        let lat = 0
        park.coord.map(pos => {
            lat += pos[0]
            return null
        })
        const AVGlat = lat / (park.coord.length)
        let lng = 0
        park.coord.map(pos => {
            lng += pos[1]
            return null
        })
        const AVGlng = lng / (park.coord.length)
        if(park.prop.nom.includes('Parc')){
            const markerParks = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(parksLocationIcon)
            }).addTo(mymap)
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            arrayLayerGroupParks.push(markerParks)
        }
        return null
    })
    
    const polygoneParksGroup = sortData.map(park =>{
        if(park.prop.nom.includes('Parc')){
            const polygoneParks = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
            })
            polygoneParks.on('click', function() {
                mymap.fitBounds(polygoneParks.getBounds())
            }).addTo(mymap)
            arrayLayerGroupParks.push(polygoneParks)
        }
        return null
    })

    const layerGroupParks = L.layerGroup(arrayLayerGroupParks)
    
    let arrayLayerGroupSquares = []
    const markersSquaresGroup = sortData.map((park) =>{
        // center the marker if possible :
        let lat = 0
        park.coord.map(pos => {
            lat += pos[0]
            return null
        })
        const AVGlat = lat / (park.coord.length)
        let lng = 0
        park.coord.map(pos => {
            lng += pos[1]
            return null
        })
        const AVGlng = lng / (park.coord.length)
        if(park.prop.nom.includes('Square')){
            const navRedirect ={
                firstLevel: 'home',
                secondLevel: 'parksList',
                thirdLevel: park.prop.nom
            }
            const markerSquares = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(squareLocationIcon)
            }).addTo(mymap)
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            arrayLayerGroupSquares.push(markerSquares)
        }
        return null
    })
    
    const polygoneSquaresGroup = sortData.map(park =>{
        if(park.prop.nom.includes('Square')){
            const polygoneSquares = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
            })
            polygoneSquares.on('click', function() {
                mymap.fitBounds(polygoneSquares.getBounds())
            }).addTo(mymap)
            arrayLayerGroupSquares.push(polygoneSquares)
        }
        return null
    })

    const layerGroupSquares = L.layerGroup(arrayLayerGroupSquares)
    
    let arrayLayerGroupWaterPark = []
    const markersBergesGroup = sortData.map((park) =>{
          // center the marker if possible :
          let lat = 0
          park.coord.map(pos => {
            lat += pos[0]
            return null
          })
          const AVGlat = lat / (park.coord.length)
          let lng = 0
          park.coord.map(pos => {
            lng += pos[1]
            return null
          })
          const AVGlng = lng / (park.coord.length)
        const str = park.prop.nom
        if(str.includes("Rives") || str.includes("Berges") || str.includes('Berge')){
            const markerBerges = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(bergesLocationIcon)
            }).addTo(mymap)
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            arrayLayerGroupWaterPark.push(markerBerges)
        }
        return null
    })
    
    const polygoneBergesGroup = sortData.map(park =>{
        const str = park.prop.nom
        if(str.includes("Rives") || str.includes("Berges") || str.includes('Berge')){
            const polygoneBerges = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
            })
            polygoneBerges.on('click', function() {
                mymap.fitBounds(polygoneBerges.getBounds())
            }).addTo(mymap)
            arrayLayerGroupWaterPark.push(polygoneBerges)
        }
        return null
    })

    const layerGroupBerges = L.layerGroup(arrayLayerGroupWaterPark)

    
    let arrayLayerGroupVoieVerte = []
    const markersVoieVerteGroup = sortData.map((park) =>{
          // center the marker if possible :
          let lat = 0
          park.coord.map(pos => {
              lat += pos[0]
              return null
          })
          const AVGlat = lat / (park.coord.length)
          let lng = 0
          park.coord.map(pos => {
              lng += pos[1]
              return null
          })
          const AVGlng = lng / (park.coord.length)
        if(park.prop.nom.includes('Voie')){
            const markerVoieVerte = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(voieVerteLocationIcon)
            }).addTo(mymap)
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            arrayLayerGroupVoieVerte.push(markerVoieVerte)
        }
        return null
    })
    
    const polygoneVoieVerteGroup = sortData.map(park =>{
        if(park.prop.nom.includes('Voie')){
            const polygoneVoieVerte = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
              })
            polygoneVoieVerte.on('click', function() {
                mymap.fitBounds(polygoneVoieVerte.getBounds())
            }).addTo(mymap)
            arrayLayerGroupVoieVerte.push(polygoneVoieVerte)
        }
        return null
    })

    const layerGroupVoieVerte = L.layerGroup(arrayLayerGroupVoieVerte)

    let arrayLayerGroupDogs = []
    const markersDogsGroup = sortData.map((park) =>{
          // center the marker if possible :
          let lat = 0
          park.coord.map(pos => {
              lat += pos[0]
              return null
          })
          const AVGlat = lat / (park.coord.length)
          let lng = 0
          park.coord.map(pos => {
              lng += pos[1]
              return null
          })
          const AVGlng = lng / (park.coord.length)
        if(park.prop.chien === 'Oui'){
            const markerDog = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(pets)
            })
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            arrayLayerGroupDogs.push(markerDog)
        }
        return null
    })

    const polygoneDogsGroup = sortData.map(park =>{
        if(park.prop.chien === 'Oui'){
            const polygoneDogs = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
              })
              polygoneDogs.on('click', function() {
                mymap.fitBounds(polygoneDogs.getBounds())
            })
            arrayLayerGroupDogs.push(polygoneDogs)
        }
        return null
    })
    const layerGroupDogs = L.layerGroup(arrayLayerGroupDogs)


    let arrayLayerGroupDogsArea = []
    const markersDogsAreaGroup = sortData.map((park) =>{
          // center the marker if possible :
          let lat = 0
          park.coord.map(pos => {
              lat += pos[0]
              return null
          })
          const AVGlat = lat / (park.coord.length)
          let lng = 0
          park.coord.map(pos => {
              lng += pos[1]
              return null
          })
          const AVGlng = lng / (park.coord.length)
        if(park.prop.esp_can === 'Oui'){
            
            const markerDogArea = L.marker([AVGlat, AVGlng], {
                title : park.prop.nom,
                draggable : 'true',
                icon: getIconMarkerCustom(petsPink)
            })
            .bindPopup(ReactDOMServer.renderToString(<CustomPoPupMarker data={park} nav={setNavRedirect(park.prop.nom)}/>))
            // markerDogArea.on('click', function() {
            //     mymap.fitBounds(markerDogArea.getBounds())
            // })
            arrayLayerGroupDogsArea.push(markerDogArea)
        }
        return null
    })

    const polygoneDogsAreaGroup = sortData.map(park =>{
        if(park.prop.esp_can === 'Oui'){
            const polygoneDogsArea = L.polyline(park.coord, {
                color: '#098c12',
                fill: true,
                fillColor: '#098c12',
                fillOpacity: .1
              })
              polygoneDogsArea.on('click', function() {
                mymap.fitBounds(polygoneDogsArea.getBounds())
            })
            arrayLayerGroupDogsArea.push(polygoneDogsArea)
        }
        return null
    })
    const layerGroupDogsArea = L.layerGroup(arrayLayerGroupDogsArea)
    ///////////////////////////////////////////////////////
    // method that add mvt layers depending on zoom levels
    ///////////////////////////////////////////////////////
    // mymap.on('sourcedata', function (e) {
    //     const zoom = mymap.getZoom()
    //       if (zoom >= 12) {
    //         console.log('supp 12')
    //     }
    //   })


    const controlLayer = L.control.layers({
    'Plan' : layerPlan,
    'Satellite'  : layerSatellite
    },{
    'filtrer les parcs' : layerGroupParks,
    'filtrer les jardins' : layerGroupGardens,
    'filtrer les squares' : layerGroupSquares,
    'filtrer les chemins de rives / berges' : layerGroupBerges,
    "filtrer les aménagements de voies vertes" : layerGroupVoieVerte,
    "voir les zones autorisées aux chiens" : layerGroupDogs,
    "voir les parcs canins" : layerGroupDogsArea
    },{
        collapsed: false
    }).addTo(mymap)
    
    // .addLayer(mymap)

//    const checkBox = document.querySelectorAll('.leaflet-control-layers-selector')
// //    checkBox.map(box => box.selected = true)
// console.log('check', checkBox.Nodelist)
// for (const [key, value] of Object.entries(checkBox)) {
//     console.log(`${key}: ${value}`);
//   }

    L.control.scale({
        imperial: false
    }).addTo(mymap)
    
    
    mymap.on('zoomend', () => {
        const zoomLevel = mymap.getZoom()
        console.log('zoomend', zoomLevel)
        this.setState({zoom : zoomLevel})
    })

  }

  componentDidUpdate(prevProps, prevState) {
      const { zoom } = this.state
      console.log('ici', zoom)
      if(zoom < 13){
        //   const localisation = document.getElementById('mapid')
        //   localisation.addEventListener('click', function() {
              console.log('hello')
        //   })

      }
  }
  
  render() {
    const { zoom } = this.state
console.log('zz', zoom)
    return (
      <div style={{display:'flex', flexDirection:'column' ,justifyContent:'center', alignItems:'center', width:'100%', height:'auto', boxSizing: 'border-box', padding: `0px 20px`}}>
        <Media query={{ maxWidth: 1024 }}>
          {(matches) =>
              matches ? (
                    <div id="mapid" ref={(map) => {this.map = map}} style={{width: '90vw', height: '70vh'}}></div>
              ) : (
                    <div id="mapid" ref={(map) => {this.map = map}} style={{width: '100%', height: '70vh'}}></div>
              )
          }
        </Media>
      </div>
    )
  }
}

export default ParkMap