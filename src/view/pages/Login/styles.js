import {makeStyles} from '@rneui/themed'

export default makeStyles(theme => ({
  background: {
    flex: 1,
    backgroundColor: theme.palette.common.yellow100
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center'
  },
  secondaryText: {
    width: '70%',
    textAlign: 'center',
    marginBottom: 48
  },
  shadow: {
    width: '80%',
    height: '30%',
    padding: 24,
  },
  providerImage: {
    width: 40,
    height: 40
  }
}))
