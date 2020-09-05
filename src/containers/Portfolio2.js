import React, { Component } from "react"
import Dot from "../globalComponents/Dot"
import { randomOf } from "../helpers"
import dez from '../static/images/dez.jpg'

class Portfolio2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      points: []
    }

    this.updatePoints()
  }

  updatePoints = () => {
      const pointsTemp = []
     setInterval(() => { 
         pointsTemp.push({
            x: randomOf(95),
            y: randomOf(85)
        })
        this.setState({
            points: pointsTemp
          })
          
    }, 1000)

    setInterval(() => { 
        let index = randomOf(pointsTemp.length)
        pointsTemp.splice(index, 1)
        this.setState({
            points: pointsTemp
          })
       },2000)
  }

  render() {
    const { points } = this.state
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <img 
            src={dez}
            alt='télécharger en pdf'
            style={{ width: '100vw', height: 'auto', position: 'absolute', bottom: 0, left: 0 }}
        />
        {points.map(point => {
          return (
            <Dot
              key={`${point.x}-${point.y}`}
              xToto={point.x}
              yToto={point.y}
            />
          )
        })}
      </div>
    )
  }
}

export default Portfolio2