import React from 'react'
import Tweet from './tweet-card'
import TweetForm from './tweet-input'

const MainContent = () => {
  // Create an array of tweet data objects
  const tweets = [
    {
      profilePicture: '/placeholder.svg',
      name: 'Alice Smith',
      handle: '@alice_smith',
      content: 'Just discovered a new favorite book. #BookLovers #Reading',
      likes: Math.floor(Math.random() * 1000),
      retweets: Math.floor(Math.random() * 500),
      timestamp: '3:45 PM · Oct 19, 2023',
    },
    {
      profilePicture: '/placeholder.svg',
      name: 'Bob Johnson',
      handle: '@bob_johnson',
      content: 'Enjoying a beautiful day at the beach. #BeachLife',
      likes: Math.floor(Math.random() * 1000),
      retweets: Math.floor(Math.random() * 500),
      timestamp: '1:20 PM · Oct 19, 2023',
    },
    {
      profilePicture: '/placeholder.svg',
      name: 'Eva Martinez',
      handle: '@eva_martinez',
      content: 'Coding is my passion! #Programming #DevelopersLife',
      likes: Math.floor(Math.random() * 1000),
      retweets: Math.floor(Math.random() * 500),
      timestamp: '11:10 AM · Oct 19, 2023',
    },
  ]

  return (
    <div className='ml-8'>
      <TweetForm />
      <div className='flex flex-col'>
        {tweets.map((tweet, index) => (
          <Tweet
            key={index} // Use a unique key for each tweet
            profilePicture={tweet.profilePicture}
            name={tweet.name}
            handle={tweet.handle}
            content={tweet.content}
            likes={tweet.likes}
            retweets={tweet.retweets}
            timestamp={tweet.timestamp}
          />
        ))}
      </div>
    </div>
  )
}

export default MainContent
