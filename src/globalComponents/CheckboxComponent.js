import React from 'react'
import Media from 'react-media'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

import icon_family from '../static/images/icon_family.png'
import icon_playground from '../static/images/icon_playground.png'
// import useNotDidMountEffect from '../customHooks/useNotDidMountEffect'
import icon_square from '../static/images/icon_square.png'
import icon_park from '../static/images/icon_park.png'
import icon_garden from '../static/images/icon_garden.png'
import icon_dog from '../static/images/icon_dog.png'
import icon_dog_brown from '../static/images/icon_dog_brown.png'
import icon_water from '../static/images/icon_water.png'
import icon_green_cycle from '../static/images/icon_green_cycle.png'
import leaf from '../static/images/leaf.jpg'

const useStyles = makeStyles(() => ({
    container: {
      width: '100vw',
      height: 'auto',
      padding: `0px 0px 0px 15px`,
      boxSizing: 'border-box',
      overflowY: 'scroll',
      overflowX: 'hidden',
      backgroundColor: '#f9f8f6'
    },
    containerDesktop: {
      width: '50vw',
      maxWidth: '50vw',
      height: '100%',
      padding: `0px 0px 2% 2%`,
      boxSizing: 'border-box'
    },
    formControlLabel: {
        marginBottom: 5,
        paddingBottom: 10,
        width: '100%'
    },
    formControlLabelMobile: {
      marginRight: 0,
      marginBottom: 5
  },
  formControlLabelMobileRow:{
      marginRight: 8,
      marginBottom: 5
  },
    formControlLabelText: {
      fontSize: 13,
      fontFamily: 'helvetica-regular'
    },
    formControlLabelTextDesktop:{
      fontSize: 18,
      padding: 10
    }
  }))

  const GreenSwitch = withStyles({
    switchBase: {
      color: '#8fa3b4',
      '&$checked': {
        color: 'green'
      },
      '&$checked + $track': {
        backgroundColor: '#8fa3b4',
      },
    },
    checked: {},
    track: {},
  })(Switch)

const GreenCheckbox = withStyles({
  root: {
    width: 10,
    height: 10,
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" icon={<RadioButtonUncheckedIcon style={{width: 15, height: 15}}/>} checkedIcon={<CheckCircleIcon style={{width: 15, height: 15}}/>} {...props} />)

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
      if(event.target.checked === true){
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
      } else {
        setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
        statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
      }
    } else if(event.target.name === "checkedEspaceDogs"){
      if(event.target.checked === true){

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
  } else {
    setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
  }
    } else if(event.target.name === "checkedAireDeJeux"){
      if(event.target.checked === true){

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
  } else {
    setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
  }
    } else if(event.target.name === "checkedLabelFamily"){
      if(event.target.checked === true){

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
  } else {
    setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
  }
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
    } else {
      setState({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
      statusChecks({ ...state, [event.target.name]: event.target.checked, checkedAll: false })
    }
  }

  return (
    <Media query={{ maxWidth: 1024 }}>
    {(matches) =>
        matches ? (
    <Paper className={classes.container} elevation={3}>
    <FormLabel component="legend" style={{color: '#B76E22', fontSize: 16, marginTop: 10, fontFamily: 'helvetica-regular'}}>Filtrer l'affichage sur la carte des espaces verts :</FormLabel>
        <FormControlLabel
            control={<GreenSwitch checked={state.checkedAll} onChange={handleChange} name="checkedAll" />}
            label={<Typography className={classes.formControlLabelText}>Visualiser tous les espaces verts</Typography>}
            style={{
              color: state.checkedAll === false ? '#8fa3b4' : 'green',
              paddingBottom: 0,
              marginRight: 0,
              width: '100%'
            }}
        />
        <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', flexWrap: 'wrap'}}>
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedParcs} onChange={handleChange} name="checkedParcs" /><img src={icon_park} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
              label={<Typography className={classes.formControlLabelText}>Parcs</Typography>}
              className={classes.formControlLabelMobileRow}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedJardins} onChange={handleChange} name="checkedJardins" /><img src={icon_garden} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
              label={<Typography className={classes.formControlLabelText}>Jardins</Typography>}
              className={classes.formControlLabelMobileRow}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedSquares} onChange={handleChange} name="checkedSquares" /><img src={icon_square} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
              label={<Typography className={classes.formControlLabelText}>Squares</Typography>}
              className={classes.formControlLabelMobileRow}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedBerges} onChange={handleChange} name="checkedBerges" /><img src={icon_water} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
              label={<Typography className={classes.formControlLabelText}>Rives/berges</Typography>}
              className={classes.formControlLabelMobileRow}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedVoiesVertes} onChange={handleChange} name="checkedVoiesVertes" /><img src={icon_green_cycle} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
              label={<Typography className={classes.formControlLabelText}>Voies vertes</Typography>}
              className={classes.formControlLabelMobileRow}
          />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedDogs} onChange={handleChange} name="checkedDogs" /><img src={icon_dog} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
            label={<Typography className={classes.formControlLabelText}>Espaces verts - Chiens autorisés</Typography>}
            className={classes.formControlLabelMobileRow}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedEspaceDogs} onChange={handleChange} name="checkedEspaceDogs" /><img src={icon_dog_brown} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
            label={<Typography className={classes.formControlLabelText}>Espaces verts - Espace canin</Typography>}
            className={classes.formControlLabelMobileRow}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedAireDeJeux} onChange={handleChange} name="checkedAireDeJeux"/><img src={icon_playground} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
            label={<Typography className={classes.formControlLabelText}>Espaces verts avec des aires de jeux</Typography>}
            className={classes.formControlLabelMobileRow}
        />
        <FormControlLabel
            control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedLabelFamily} onChange={handleChange} name="checkedLabelFamily" /><img src={icon_family} alt="logo" style={{height: 28, width: 23, marginRight: 5}} /></div>}
            label={<Typography className={classes.formControlLabelText}>Espaces verts labellisés 'Family Friendly</Typography>}
            className={classes.formControlLabelMobileRow}
        />
        </div>
    </Paper>
    ) : (
    <Paper className={`${classes.container} ${classes.containerDesktop}`} elevation={3}>
    <div style={{height: '100%', width: '100%', position: 'relative'}}>
    <img src={leaf} alt="Photographie du parc" style={{height: 'auto', width: '100%', opacity: .6, position: 'absolute', filter: 'grayscale(.5)'}}/>
      <div style={{height: '100%', width: '100%', position: 'absolute', top: '8%'}}>
      <FormLabel component="legend" style={{color: '#B76E22', fontSize: 22, marginBottom: 40, fontFamily: 'helvetica-regular', fontWeight: 600}}>Filtrer l'affichage sur la carte :</FormLabel>
          <FormControlLabel
              control={<GreenSwitch checked={state.checkedAll} onChange={handleChange} name="checkedAll" />}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser tous les espaces verts</Typography>}
              style={{
                color: state.checkedAll === false ? '#8fa3b4' : 'green',
                marginBottom: 5,
                paddingBottom: 20,
                width: '100%'
              }}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedParcs} onChange={handleChange} name="checkedParcs" /><img src={icon_park} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les parcs</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedJardins} onChange={handleChange} name="checkedJardins" /><img src={icon_garden} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les jardins</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedSquares} onChange={handleChange} name="checkedSquares" /><img src={icon_square} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les squares</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedBerges} onChange={handleChange} name="checkedBerges" /><img src={icon_water} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les chemins de rives / berges</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedVoiesVertes} onChange={handleChange} name="checkedVoiesVertes" /><img src={icon_green_cycle} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les aménagements de voies vertes</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedDogs} onChange={handleChange} name="checkedDogs" /><img src={icon_dog} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les espaces verts où les chiens sont autorisés</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedEspaceDogs} onChange={handleChange} name="checkedEspaceDogs" /><img src={icon_dog_brown} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les espaces verts avec un espace canin</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedAireDeJeux} onChange={handleChange} name="checkedAireDeJeux"/><img src={icon_playground} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les espaces verts avec des aires de jeux</Typography>}
              className={classes.formControlLabel}
          />
          <FormControlLabel
              control={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><GreenCheckbox checked={state.checkedLabelFamily} onChange={handleChange} name="checkedLabelFamily" /><img src={icon_family} alt="logo" style={{height: 33, width: 28, marginRight: 10}} /></div>}
              label={<Typography className={`${classes.formControlLabelText} ${classes.formControlLabelTextDesktop}`}>Visualiser les espaces verts labellisés 'Family Friendly</Typography>}
              className={classes.formControlLabel}
          />
          </div>
          </div>
      </Paper>
      )
    }
</Media>
  )
}