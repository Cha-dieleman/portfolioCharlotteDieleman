import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getSelectedPark } from '../actions'


export default function Autosuggest(props) {
    const { data } = props
  let result = []
  data.map(park => {
      result.push(`${park.properties.nom} - ${park.properties.numvoie} ${park.properties.voie} ${park.properties.codepost} ${park.properties.commune}`)
      return null
  })
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div style={{ marginBottom: 40, display:'flex', justifyContent:'center'}}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            getSelectedPark(newValue)
            setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={result}
        style={{ width: 350}}
        renderInput={(params) => <TextField {...params} label="Filtrer par nom, adresse, commune..." variant="outlined" />}
      />
    </div>
  );
}