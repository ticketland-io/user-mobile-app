import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-native'
import {Context} from '../../core/Store'

const Splash = () => {
  const [state, _] = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (state.user) {
      navigate('/home')
    }
  }, [state.user])

  // TODO: add design
  return (null)
}

export default Splash
