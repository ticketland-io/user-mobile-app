import React, {useCallback, useContext, useEffect} from 'react'
import {SafeAreaView, Platform} from 'react-native'
import AsyncButton from '../../components/AsyncButton'
import {Context} from '../../core/Store'

const Login = () => {
  const [state, dispatch] = useContext(Context)

  const logIn = (provider) => useCallback(async () => {
    try {
      switch (provider) {
        case 'google': {
          await state.firebase.signInWithGoogle()
          break;
        }
        case 'facebook': {
          console.log(provider)
          break;
        }
        default:
          break;
      }
    }
    catch (error) {
      // ignore
    }
  }, [])

  return (
    <SafeAreaView >
      <AsyncButton loading={false} onPress={logIn('google')}>
        Login
      </AsyncButton>
    </SafeAreaView>
  )
}


export default Login
