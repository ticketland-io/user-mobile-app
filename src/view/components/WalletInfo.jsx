import React, {useEffect, useState, useContext} from 'react'
import Grid from '@mui/material/Grid'
import {Context} from '../core/Store'

const WalletInfo = props => {
  const [state, _] = useContext(Context)
  const [accountInfo, setAccountInfo] = useState()

  useEffect(() => {
    const loadAccountInfo = async () => {
      const poll = async () => {
        const info = await state.web3.getAccountInfo(state.web3.wallet.publicKey)
        setAccountInfo(info)

        if(!info) {
          setTimeout(poll, 1000)
        }
      }

      setTimeout(poll, 1000)
    }
    
    state.web3 && loadAccountInfo().catch(error => console.log('Error loading account info ', error))
  }, [state.web3])

  return state.web3 ? (
    <Grid container spacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}} style={{width: '100%'}}>
      <Grid item>
        {state.web3.wallet.publicKey.toBase58()}
      </Grid>
      <Grid item>
        Balance:
        {accountInfo && state.web3.fromBase(accountInfo.lamports)}
      </Grid>
    </Grid>
  ) : null
}

export default React.memo(WalletInfo)
