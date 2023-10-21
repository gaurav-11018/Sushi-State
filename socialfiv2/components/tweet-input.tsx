'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios' // Import Axios
import React, { ChangeEvent, FormEvent, useState } from 'react'

const TweetForm = () => {
  const [tweetText, setTweetText] = useState<string>('')

  const handleTweetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTweetText(event.target.value)
  }
  const submitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const body = { content: tweetText }
      await axios.post('http://localhost:3000/api/postTweet', body, {
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={submitData} className='flex flex-row gap-6 w-1/3 mt-[5%]'>
      <Input
        type='text'
        value={tweetText}
        onChange={handleTweetChange}
        placeholder="What's happening?"
      />

      {tweetText}
      <Button className='bg-gray-800 text-white' type='submit'>
        Tweet
      </Button>
    </form>
  )
}

export default TweetForm
