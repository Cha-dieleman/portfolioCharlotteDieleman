import React from 'react'

function CustomPoPupMarker(props) {
  const { data, nav } = props
  
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
          <a href={`http://localhost:3000/${nav.secondLevel}/${nav.thirdLevel}`}>
          <button style={{color: '#B76E22', borderRadius:'none', width: 100, height: 25, border: 'solid 1px #B76E22', backgroundColor: 'white', marginBottom: 10, cursor: 'pointer'}} type="button" variant="outlined" >
              En savoir plus
          </button>
          </a>
      </div>
      ) : null
    }
    </div>
)
}

export default CustomPoPupMarker