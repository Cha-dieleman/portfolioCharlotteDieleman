import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'


import jardinLocationIcon from '../static/images/jardin_location_icon.png'
import parksLocationIcon from '../static/images/parks_location_icon.png'
import squareLocationIcon from '../static/images/square_location_icon.png'
import bergesLocationIcon from '../static/images/berges_location_icon.png'
import voieVerteLocationIcon from '../static/images/voieVerte_location_icon.png'
import pets from '../static/images/pets.png'
import petsPink from '../static/images/petsPink.png'
import checkBoxImg from '../static/images/checkBoxImg.jpg'
// import useNotDidMountEffect from '../customHooks/useNotDidMountEffect'


const useStyles = makeStyles(() => ({
    container: {
      width: '50vw',
      maxWidth: '50vw',
      height: '100%',
      backgroundImage: `url(${checkBoxImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: `40px 2% 40px 25%`,
      boxSizing: 'border-box',
      overflow: 'scroll'
    },
    formControlLabel: {
        borderBottom: 'solid 1px green',
        marginBottom: 10,
        paddingBottom: 10,
        width: '100%'
    },
    lastFormControlLabel: {
      borderBottom: 'none',
    }
  }))

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} {...props} />)

const BrownCheckbox = withStyles({
  root: {
    color: '#098c12',
    '&$checked': {
      color: '#098c12',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} {...props} />)

export default function CheckboxComponent(props) {
  const { statusChecks } = props
    const classes = useStyles()
    const [state, setState] = React.useState({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: true
    })
    
  const handleChange = (event) => {
    // cas de l'affichage des parcs autorisés pour les chiens : (il faut PURGE les autres data pour ne pas afficher en double les parcs)
    // cas de l'affichage des parcs avec espace canin : (il faut PURGE les autres data pour ne pas afficher en double les parcs)
    // event.target.checked = utile pour pouvoir décocher
    if(event.target.name === "checkedDogs"){
      setState({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: event.target.checked ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: false
      })
      statusChecks({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: event.target.checked ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: false
      })
    } else if(event.target.name === "checkedEspaceDogs"){
      setState({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: event.target.checked,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: false
    })
      statusChecks({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: event.target.checked,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: false
    })
    } else if(event.target.name === "checkedAireDeJeux"){
      setState({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: event.target.checked,
        checkedLabelFamily: false,
        checkedAll: false
    })
      statusChecks({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: event.target.checked,
        checkedLabelFamily: false,
        checkedAll: false
    })
    } else if(event.target.name === "checkedLabelFamily"){
      setState({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: event.target.checked,
        checkedAll: false
    })
      statusChecks({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: event.target.checked,
        checkedAll: false
    })
    } else if(event.target.name === "checkedAll"){
      setState({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: event.target.checked
    })
      statusChecks({
        checkedParcs: false,
        checkedJardins: false,
        checkedSquares: false,
        checkedBerges: false,
        checkedVoiesVertes: false,
        checkedDogs: false ,
        checkedEspaceDogs: false,
        checkedAireDeJeux: false,
        checkedLabelFamily: false,
        checkedAll: event.target.checked
    })
    // } else if(event.target.name === "checkedParcs"){
    //   setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    //   statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    // } else if(event.target.name === "checkedJardins"){
    //   setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    //   statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    } else {
      setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
      statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    }
  }

  // useNotDidMountEffect(() => {
  //   console.log('hello')
  //     setState({
  //     checkedParcs: false,
  //     checkedJardins: false,
  //     checkedSquares: false,
  //     checkedBerges: false,
  //     checkedVoiesVertes: false,
  //     checkedDogs: true,
  //     checkedEspaceDogs: false
  // })
  // }, [state.checkedDogs])
  // console.log('state', state)

  return (
    <Paper className={classes.container} elevation={3}>
    <FormLabel component="legend" style={{color: '#B76E22', fontSize: 18, marginBottom: 10}}>Filtrer l'affichage sur la carte :</FormLabel>
    <FormGroup column="true">
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><BrownCheckbox checked={state.checkedAll} onChange={handleChange} name="checkedAll" /><img src={parksLocationIcon} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Sélectionner / Désélectionner tous les espaces verts"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedParcs} onChange={handleChange} name="checkedParcs" /><img src={parksLocationIcon} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les parcs"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedJardins} onChange={handleChange} name="checkedJardins" /><img src={jardinLocationIcon} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les jardins"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedSquares} onChange={handleChange} name="checkedSquares" /><img src={squareLocationIcon} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les squares"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedBerges} onChange={handleChange} name="checkedBerges" /><img src={bergesLocationIcon} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les chemins de rives / berges"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedVoiesVertes} onChange={handleChange} name="checkedVoiesVertes" /><img src={voieVerteLocationIcon} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les aménagements de voies vertes"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedDogs} onChange={handleChange} name="checkedDogs" /><img src={pets} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les espaces verts où les chiens sont autorisés"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedEspaceDogs} onChange={handleChange} name="checkedEspaceDogs" /><img src={petsPink} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les espaces verts avec un espace canin"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedAireDeJeux} onChange={handleChange} name="checkedAireDeJeux"/><img src={pets} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les espaces verts avec des aires de jeux"
            className={classes.formControlLabel}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedLabelFamily} onChange={handleChange} name="checkedLabelFamily" /><img src={pets} alt="logo" style={{height: 36, width: 28, marginRight: 10}} /></div>}
            label="Visualiser les espaces verts labellisés 'Family Friendly'"
            className={`${classes.formControlLabel} ${classes.lastFormControlLabel}`}
        />
    </FormGroup>
    </Paper>
  )
}