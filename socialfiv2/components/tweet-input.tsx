'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { useState } from 'react'

const TweetForm = () => {
  const [tweetText, setTweetText] = useState('')

  const handleTweetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTweetText(event.target.value)
  }

  // const submitData = async (e: React.SyntheticEvent) => {
  //   e.preventDefault()
  //   try {
  //     const body = { content: tweetText }
  //     await fetch(`/api/postTweet`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <form className='flex flex-row gap-6 w-1/3 mt-[5%]'>
      <Input
        type='text'
        value={tweetText}
        onChange={handleTweetChange}
        placeholder="What's happening?"
      />
      <Button className='bg-gray-800 text-white' type='submit'>
        Tweet
      </Button>
    </form>
  )
}

export default TweetForm
