import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';
import CreateSheetForm from './CreateSheetForm';

const globalTheme = createMuiTheme({
    color: '#fff',
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: blue,
      // type: 'dark',
      text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
      type: 'dark'
    },
    overrides: {
      MuiFilledInput: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.09)'
        }
      }
    }
})

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <div className="App">
        <header className="App-header">
          <h1>Quick Task Sheet Creator</h1>
        </header>
        <CreateSheetForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
