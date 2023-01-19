import {makeStyles} from '@rneui/themed'

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
    minHeight: '100%',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexWrap: 'nowrap'
  }
}))
