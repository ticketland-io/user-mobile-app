import React from 'react'
import {View} from 'react-native'
import {
  Route,
  Routes,
  NativeRouter
} from 'react-router-native'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import useStyle from './styles'

const Router = props => {
  const classes = useStyle()

  return (
    <View style={classes.root}>
      <NativeRouter>
        <Routes>
          <Route exact strict path='/' element={<Login />} />
          <Route exact strict path='/profile' element={<Profile />} />
          <Route exact strict path='/home' element={<Home />} />
        </Routes>
      </NativeRouter>
    </View>
  )
}

export default Router
