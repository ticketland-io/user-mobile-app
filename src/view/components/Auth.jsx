import React, {useEffect, useContext} from 'react'
import {Context} from '../core/Store'
import {setUser} from '../../data/actions'

const Auth = () => {
  const [state, dispatch] = useContext(Context)

  useEffect(() => {
    state.firebase.onUserChanged(currentUser => {
      if (currentUser) {
        dispatch(setUser(currentUser))
      } else {
        dispatch(setUser({}))
      }
    })
  }, [])

  return null
}

export default React.memo(Auth)
