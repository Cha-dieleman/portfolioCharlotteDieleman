import React from 'react'
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import './App.css'
import Routes from './routes'
import { store } from './store'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'helvetica-regular',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})


// persistor.purge()
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  </Provider>
)

export default App
