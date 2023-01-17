import React, {useCallback, useEffect} from 'react'
import {SafeAreaView, Platform} from 'react-native'
import AsyncButton from '../../components/AsyncButton'
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const signIn = (provider) => useCallback(async () => {
    try {
      switch (provider) {
        case 'google': {
          await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

          const {idToken} = await GoogleSignin.signIn();
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          const authres = auth().signInWithCredential(googleCredential);

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

  useEffect(() => {
    if (Platform.OS === 'ios') {
      GoogleSignin.configure();
    } else {
      GoogleSignin.configure({
        webClientId: '1041096392429-t92h90h7naekc8arct1oteuc183qqhv9.apps.googleusercontent.com',
      });
    }
  }, [])


  return (
    <SafeAreaView >
      <AsyncButton loading={false} onPress={signIn('google')}>
        Login
      </AsyncButton>
    </SafeAreaView>
  )
}


export default Login
