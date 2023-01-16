import React from 'react'
import {View} from 'react-native'
import {
  BrowserRouter,
  Route,
  Routes,
  NativeRouter
} from 'react-router-native'
import Home from '../pages/Home'
import Login from '../pages/Login'
import styles from './styles'


const Router = props => {
  const classes = styles()

  return (
    <View className={classes.root}>
      <NativeRouter>
        <View className={classes.pageContainer} >
          <Routes>
            <Route exact strict path='/' element={<Home />} />
            <Route exact strict path='/login' element={<Login />} />
          </Routes>
        </View>
      </NativeRouter>
    </View>
  )
}

export default Router
