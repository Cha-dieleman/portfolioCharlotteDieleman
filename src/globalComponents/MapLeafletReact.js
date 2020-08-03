import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import reactId from 'react-id-generator'
import L from 'leaflet'

import jardinLocationIcon from '../static/images/jardin_location_icon.png'
import parksLocationIcon from '../static/images/parks_location_icon.png'
import squareLocationIcon from '../static/images/square_location_icon.png'
import bergesLocationIcon from '../static/images/berges_location_icon.png'
import voieVerteLocationIcon from '../static/images/voieVerte_location_icon.png'
import parkImg from '../static/images/parkImg.jpg'

// import CustomPoPupMarker from './CustomPoPupMarker'

class MapLeafletReact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataToDisplayMarkers : null,
            centerMap: [45.765000, 4.835000]
        }
    }

    getIconMarkerCustom = (data) => {
        let iconUrl = null
        const parkName = data.prop.nom
        // if(data.prop.chien === 'Oui'){
        //     iconUrl = pets
        // }
        // if(data.prop.esp_can === 'Oui'){
        //     iconUrl = petsPink
        // }
        if(parkName.includes('Parc')){
            iconUrl = parksLocationIcon
        }
        if(parkName.includes('Square')){
            iconUrl = squareLocationIcon
        }
        if(parkName.includes("Rives") || parkName.includes("Berges") || parkName.includes('Berge')){
            iconUrl = bergesLocationIcon
        }
        if(parkName.includes('Jardin')){
            iconUrl = jardinLocationIcon
        }
        if(parkName.includes('Voie')){
            iconUrl = voieVerteLocationIcon
        }
       
        
        return(
            L.icon({
                iconUrl: iconUrl,
                iconSize: [30,41],
                iconAnchor: [15,41],
                popupAnchor: [0,-41],
            })
        )
    }

    componentDidMount(){
    const { dataParks } = this.props
    const markersToDisplay = []
    dataParks.map((park) =>{
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
        const navR ={
            firstLevel: 'home',
            secondLevel: 'parksList',
            thirdLevel: park.prop.nom
        }
            
        const marker =  (
            <Marker position={[AVGlat, AVGlng]} icon={this.getIconMarkerCustom(park)}>
                        <Popup style={{width: 'auto', height: 'auto'}}>
                            <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', width:'100%', height:'auto', boxSizing: 'border-box'}}>
                                <h2 style={{margin: `0px 0px 10px 0px`}}>
                                {park.prop.nom}
                                </h2>  
                                <img src={parkImg} alt="Photographie du parc" style={{height: 'auto', width: '50%', margin: `0px 0px 10px 0px`}} />
                                <p style={{height: 'auto', width: '100%', margin: `0px 0px 10px 0px`}}>
                                {park.prop.description}
                                </p>
                                <a href={`http://localhost:3000/${navR.secondLevel}/${navR.thirdLevel}`}>
                                <button style={{color: '#B76E22', borderRadius:'none', width: 100, height: 25, border: 'solid 1px #B76E22', backgroundColor: 'white', marginBottom: 10}} type="button">
                                    En savoir plus
                                </button>
                                </a>
                            </div>
                        </Popup>
                    </Marker>
      )
      markersToDisplay.push(marker)
      return null
    })
    this.setState({dataToDisplayMarkers : markersToDisplay })
    }

    componentDidUpdate(prevProps){
        const { dataParks } = this.props
        if(prevProps.dataParks !== dataParks){
            const markersToDisplay = []
            dataParks.map((park) =>{
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
                const navR ={
                    firstLevel: 'home',
                    secondLevel: 'parksList',
                    thirdLevel: park.prop.nom
                }
                    
                const marker =  (
                    <Marker position={[AVGlat, AVGlng]} icon={this.getIconMarkerCustom(park)}>
                        <Popup style={{width: 'auto', height: 'auto'}}>
                            <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', width:'100%', height:'auto', boxSizing: 'border-box'}}>
                                <h2 style={{margin: `0px 0px 10px 0px`}}>
                                {park.prop.nom}
                                </h2>  
                                <img src={parkImg} alt="Photographie du parc" style={{height: 'auto', width: '50%', margin: `0px 0px 10px 0px`}} />
                                <p style={{height: 'auto', width: '100%', margin: `0px 0px 10px 0px`}}>
                                {park.prop.description}
                                </p>
                                <a href={`http://localhost:3000/${navR.secondLevel}/${navR.thirdLevel}`}>
                                <button style={{color: '#B76E22', borderRadius:'none', width: 100, height: 25, border: 'solid 1px #B76E22', backgroundColor: 'white', marginBottom: 10}} type="button">
                                    En savoir plus
                                </button>
                                </a>
                            </div>
                        </Popup>
                    </Marker>
              )
              markersToDisplay.push(marker)
              return null
            })
            this.setState({dataToDisplayMarkers : markersToDisplay })
        }
    }

  render() {
    const { dataToDisplayMarkers, centerMap } = this.state
    
    return (
      <Map center={centerMap} zoom={13} style={{width: '50vw', height: '100%'}}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { 
            dataToDisplayMarkers ? (
                <div>
                    {dataToDisplayMarkers.map(marker => <div key={reactId()}>{marker}</div>)}
                </div>
            ) : null
        }
      </Map>
    )
  }
}

export default MapLeafletReact