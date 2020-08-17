import React from 'react'
import { withRouter } from 'react-router-dom'
import { setNav } from '../actions'

function CustomPoPupMarker(props) {
  const { data, nav } = props

  const handleClick = (nav) => {
    const { history } = props
    setNav({
      firstLevel: 'home',
      secondLevel: 'parksMap',
      thirdLevel: nav.thirdLevel
    })
    history.push(`/${nav.secondLevel}/${nav.thirdLevel}`)
  }

  return (
    <div >
    {
      nav && data ? (
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', width:175, height:'auto', boxSizing: 'border-box'}}>
          <h2 style={{margin: `0px 0px 10px 0px`}}>
          {data.properties.nom}
          </h2>  
          <p style={{height: 'auto', width: '100%', margin: `0px 0px 10px 0px`}}>
          {data.properties.description}
          </p>
          <button style={{color: '#B76E22', borderRadius:'none', width: 100, height: 25, border: 'solid 1px #B76E22', backgroundColor: 'white', marginBottom: 10, cursor: 'pointer'}} type="button" variant="outlined" onClick={() => handleClick(nav)}>
              En savoir plus
          </button>
      </div>
      ) : null
    }
    </div>
)
}

export default withRouter(CustomPoPupMarker)
