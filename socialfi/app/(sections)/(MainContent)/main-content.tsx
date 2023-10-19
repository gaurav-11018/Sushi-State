import React from 'react'
import Tweet from './tweet-card'
import TweetForm from './tweet-input'
import getPosts from '@/pages/api/getPosts/route'

const MainContent = async () => {
  const tweets = await getPosts()
  if (!tweets) {
  }
  return (
    <div className='ml-8'>
      <TweetForm />
      <div className='flex flex-col'>
        {tweets!.map((tweet, index) => (
          <Tweet
            name={tweet.author.name}
            handle={tweet.author.handle}
            authorId={tweet.authorId}
            content={tweet.content}
            id={tweet.id}
            likes={tweet.likes}
            published={tweet.published}
            retweets={tweet.retweeets}
            title={tweet.title}
            key={tweet.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MainContent
