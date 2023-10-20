import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

type WalletType = {
  fees?: number
  value?: number
  token: 'AVAX' | 'SOL' | 'SUI'
}

const WalletCard = ({ token, value, fees }: WalletType) => {
  return (
    <div className='flex flex-row'>
      <Card className='flex flex-col'>
        <div className=''>
          {' '}
          {fees} {token}{' '}
        </div>
        <div>Fees Earned</div>
      </Card>
      <Card className='flex flex-col'>
        <div className=''>
          {' '}
          {value} {token}{' '}
        </div>
        <div>Portfolio Earned</div>
      </Card>
    </div>
  )
}

const Wallet = () => {
  return (
    <div className='flex flex-col justify-center gap-6 items-center'>
      <WalletCard fees={100} value={200} token='AVAX' />

      <div className='w-full border-t border-2 border-black'></div>

      <div className='flex flex-row'>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
        <Button>Migrate</Button>
      </div>

      <Button className='w-1/2'> Export Private Key</Button>
    </div>
  )
}

export default Wallet
