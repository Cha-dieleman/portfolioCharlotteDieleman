import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import Media from 'react-media'
import reactId from 'react-id-generator'
import L from 'leaflet'

import CustomPoPupMarker from './CustomPoPupMarker'
import icon_park  from '../static/images/icon_park.png'
import icon_square from '../static/images/icon_square.png'
import icon_garden from '../static/images/icon_garden.png'
import icon_water from '../static/images/icon_water.png'
import icon_green_cycle from '../static/images/icon_green_cycle.png'

class MapLeafletReact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataToDisplayMarkers : null,
            centerMap: [45.765000, 4.835000],
            zoom: 13
        }
    }

    getIconMarkerCustom = (data) => {
        let iconUrl = null
        const parkName = data.properties.nom
        if(parkName.includes('Parc')){
            iconUrl = icon_park
        }
        if(parkName.includes('Square')){
            iconUrl = icon_square 
        }
        if(parkName.includes("Rives") || parkName.includes("Berges") || parkName.includes('Berge')){
            iconUrl = icon_water
        }
        if(parkName.includes('Jardin')){
            iconUrl = icon_garden
        }
        if(parkName.includes('Voie')){
            iconUrl = icon_green_cycle
        }
       
        
        return(
            L.icon({
                iconUrl: iconUrl,
                iconSize: [30,35],
                iconAnchor: [15,35],
                popupAnchor: [0,-35]
            })
        )
    }

    componentDidMount(){
    const { dataParks, dataParkCenterPos, navLocatedDataPark } = this.props
    if(dataParkCenterPos){
        this.setState({
            centerMap: dataParkCenterPos[0].properties.coordinateCenter,
            zoom: 16
        })
    }
    const markersToDisplay = []
    dataParks.map((park) =>{
        const navR ={
            firstLevel: 'home',
            secondLevel: 'parksMap',
            thirdLevel: park.properties.nom
        }
        let marker = null
        if(navLocatedDataPark === true){
            marker =  <Marker position={park.properties.coordinateCenter} icon={this.getIconMarkerCustom(park)} />
        } else {
            marker =  (
                <Marker position={park.properties.coordinateCenter} icon={this.getIconMarkerCustom(park)}>
                    <Popup style={{width: 200, height: 200}}>
                        <CustomPoPupMarker data={park} nav={navR}/>
                    </Popup>
                </Marker>
          )
        }
      markersToDisplay.push(marker)
      return null
    })
    this.setState({dataToDisplayMarkers : markersToDisplay })
    }

    componentDidUpdate(prevProps){
        const { dataParks, navLocatedDataPark } = this.props
        if(prevProps.dataParks !== dataParks){
            this.setState({
                centerMap: [45.765000, 4.835000],
                zoom: 13
            })
            const markersToDisplay = []
            dataParks.map((park) =>{
                const navR ={
                   // firstLevel: 'home',
                   // secondLevel: 'parksMap',
                    thirdLevel: park.properties.nom
                }
                let marker = null
                if(navLocatedDataPark === true){
                    marker =  <Marker position={park.properties.coordinateCenter} icon={this.getIconMarkerCustom(park)} />
                } else {
                    marker =  (
                        <Marker position={park.properties.coordinateCenter} icon={this.getIconMarkerCustom(park)}>
                            <Popup style={{width: 200, height: 200}}>
                                <CustomPoPupMarker data={park} nav={navR}/>
                            </Popup>
                        </Marker>
                  )
                }
              markersToDisplay.push(marker)
              return null
            })
            this.setState({dataToDisplayMarkers : markersToDisplay })
        }
    }

    onClickChangePosCenter = (center) => {
        this.setState({
            centerMap: center,
            zoom: 16
        })
      }


  render() {
    const { dataToDisplayMarkers, centerMap, zoom, locatedMapInPark } = this.state
    const { dataParks } = this.props
    
    return (
        <Media query={{ maxWidth: 1024 }}>
        {(matches) =>
            matches ? (
      <Map center={centerMap} zoom={zoom} style={{width: '85vw', height: '40vh', marginTop: 20}}>
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
        { 
            dataParks ? (
                <div>
                    {dataParks.map(park => <Polygon onClick={() => this.onClickChangePosCenter(park.properties.coordinateCenter)} key={reactId()} positions={park.coordinates} color="#3d7130"/>)}   
                    
                </div>
            ) : null
        }
      </Map>
    ) : (
        <Map center={centerMap} zoom={zoom} style={{width: locatedMapInPark ? '50vw' : '50vw', height: '85vh'}}>
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
        { 
            dataParks ? (
                <div>
                    {dataParks.map(park => <Polygon onClick={() => this.onClickChangePosCenter(park.properties.coordinateCenter)} key={reactId()} positions={park.coordinates} color="#558c44"/>)}   
                    
                </div>
            ) : null
        }
      </Map>
      )
    }
</Media>
    )
}
}

export default MapLeafletReact