import {makeStyles} from '@rneui/themed'

export default makeStyles(theme => ({
  root: {
    // border: '1 solid',
    // flex:1,
    borderWidth: 1,
    // boxShadow: '5 10',
    shadowColor: theme.palette.common.black,
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 1,
    // shadowRadius: 3,
    borderRadius: 50,
    // overflow: 'hidden',
    margin: 10,
    marginBottom: 20,
    borderColor: theme.palette.common.yellow500,
    backgroundColor: theme.palette.common.white
  },
  inner:{
    flex:1,
    overflow: 'hidden',
    borderRadius: 50,
  }
}))
