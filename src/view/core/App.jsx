/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import Login from '../pages/login/Login'
import {getTheme} from './theme'

const theme = getTheme()

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}


export default App;
