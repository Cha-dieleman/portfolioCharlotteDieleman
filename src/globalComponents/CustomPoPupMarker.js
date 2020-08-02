import React from 'react'
import Media from 'react-media'

import parkImg from '../static/images/parkImg.jpg'

function CustomPoPupMarker(props) {
  const { data, nav } = props
  
  return (
    <div >
    {
      nav ? (
        <Media query={{ maxWidth: 1024 }}>
        {(matches) =>
            matches ? (
              <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', width:175, height:175, boxSizing: 'border-box'}}>
                <h2 style={{margin: 0}}>
                  {data.prop.nom}
                </h2>
                <p style={{margin: `10px 0px`}}>
                  Lorem ipsum dolor sit amet,
                  <br/>
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href={`http://localhost:3000/${nav.secondLevel}/${nav.thirdLevel}`}>
                  <button style={{color: '#B76E22', borderRadius:'none', width: 100, height: 25, border: 'solid 1px #B76E22', backgroundColor: 'white'}} type="button">
                    En savoir plus
                  </button>
                </a>
          </div>
        ) : (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'auto', height:'auto', boxSizing: 'border-box'}}>
                <img src={parkImg} alt="Photographie du parc" style={{height: 200, width: 300, marginRight: 10}} />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', width:'auto', height:'auto', boxSizing: 'border-box'}}>
                  <h2 style={{margin: 0}}>
                    {data.prop.nom}
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href={`http://localhost:3000/${nav.secondLevel}/${nav.thirdLevel}`}>
                    <button style={{color: '#B76E22', borderRadius:'none', width: 100, height: 25, border: 'solid 1px #B76E22', backgroundColor: 'white'}} type="button">
                      En savoir plus
                    </button>
                  </a>
                </div>
            </div>
          )
        }
    </Media>
      ) : null
    }
    </div>
    
)
}

export default CustomPoPupMarker