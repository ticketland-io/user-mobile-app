import React from 'react'
import {Button} from '@rneui/base'
import {Link} from 'react-router-native'
import styles from './styles'

const AsyncButton = props => {
  const {
    children,
    loading,
    className,
    variant,
    onClick,
    disabled,
    fullWidth,
    color,
    path,
    size,
    type,
    ...rest
  } = props

  const classes = styles()
  return (
    <Button
      disableElevation
      variant={variant}
      size={size}
      disabled={loading || disabled}
      loading={loading}
      onClick={onClick}
      type={type}
      className={className}
      fullWidth={fullWidth}
      color={color}
      component={path ? Link : undefined}
      to={path}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default React.memo(AsyncButton)
