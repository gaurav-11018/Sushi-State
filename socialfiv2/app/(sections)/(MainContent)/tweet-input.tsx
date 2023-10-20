'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const TweetForm = () => {
  const [tweetText, setTweetText] = useState('')

  const handleTweetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTweetText(event.target.value)
  }

  const handleTweetSubmit = () => {
    // Handle the tweet submission (e.g., send it to a server or display it).
    console.log('Tweet submitted:', tweetText)

    // Clear the input field after submission
    setTweetText('')
  }

  return (
    <div className='flex flex-row gap-6'>
      <Input
        type='text'
        value={tweetText}
        onChange={handleTweetChange}
        placeholder="What's happening?"
      />
      <Button onClick={handleTweetSubmit}>Tweet</Button>
    </div>
  )
}

export default TweetForm
