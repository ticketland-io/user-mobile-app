import {Platform} from 'react-native'
import Record from '@ppoliani/im-record'
import auth from '@react-native-firebase/auth'
import jwt_decode from "jwt-decode";
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const googleConfigure = () => {
  if (Platform.OS === 'ios') {
    GoogleSignin.configure();
  } else {
    GoogleSignin.configure({
      webClientId: '1041096392429-t92h90h7naekc8arct1oteuc183qqhv9.apps.googleusercontent.com',
    });
  }
}

const signInWithGoogle = async () => {
  googleConfigure()
  
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

const curAuth = auth()

const accessToken = async () => {
  const now = Date.now() / 1000
  const token = jwt_decode(await curAuth.currentUser.getIdToken())

  if (now > token.exp) {
    await curAuth.currentUser.getIdToken(true)
  }

  return curAuth.currentUser.getIdToken()
}

const onUserChanged = (_, ...args) => curAuth.onIdTokenChanged(...args)
const signOutUser = () => curAuth.signOut()

const Auth = Record({
  googleConfigure,
  signInWithGoogle,
  signOutUser,
  onUserChanged,
  accessToken
})

export default Auth
