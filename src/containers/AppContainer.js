import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { testAction } from '../actions'

const styles = () => ({})

class AppContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
  
    render() {
      const { history } = this.props
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            testAction(true)
            const location = {
              pathname: '/'
            }
            history.push(location)
          }}
        >
          Primary
        </Button>
      )
    }
  }

  const mapStateToProps = (state) => {
      console.log('state : ', state)
    return ({
        test: state.test
    })
  }

export default withStyles(styles)(connect(mapStateToProps)(AppContainer))

