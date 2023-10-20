import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type WalletType = {
  fees: number
  value: number
  token: 'AVAX' | 'SOL' | 'SUI'
  balance: number
}

const WalletCard = ({ token, value, fees, balance }: WalletType) => {
  return (
    <div className='flex flex-col  align-middle justify-center '>
      <div className='flex flex-row'>
        <div>
          <h1 className='text-xl font-semibold'>Name</h1>
          <p className='text-gray-500'>@name</p>
        </div>

        <div className=' ml-auto text-xl font-semibold'>
          {balance} {token}
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[10%]'>
        <Card className='flex flex-col p-4'>
          <div className='text-xl font-semibold'>
            {fees} {token}
          </div>
          <div className='text-gray-500'>Fees Earned</div>
        </Card>
        <Card className='flex flex-col p-4'>
          <div className='text-xl font-semibold'>
            {value} {token}
          </div>
          <div className='text-gray-500'>Portfolio Earned</div>
        </Card>
      </div>
    </div>
  )
}

const Wallet = () => {
  return (
    <div className='flex flex-col mt-[5%] gap-6 items-center h-screen '>
      <WalletCard fees={100} value={200} token='AVAX' balance={500} />

      <div className='w-1/2  border-t border-2 border-black'></div>

      <div className='flex flex-row justify-center gap-10'>
        <Button className=''>Deposit</Button>
        <Button className=''>Withdraw</Button>
      </div>
    </div>
  )
}

export default Wallet
