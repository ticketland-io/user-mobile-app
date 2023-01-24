import React from 'react'
import {View} from 'react-native'
import useStyles from './styles'

const Shadow = (props) => {
  const {children, style = '', ...rest} = props
  const classes = useStyles()

  return (
    <View style={[style, classes.root]} {...rest}>
      <View style={classes.inner}>
        {children}
      </View>
    </View>
  )
}

export default Shadow
