import React from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox.js"
import Post from "./Post.js"

export default function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed_header'>
        <h1>home</h1>
        
        
        </div>
        {/* TweetBox */}
        <TweetBox/>
        {/* post */}
        <Post />
        <Post />
        <Post />
        
        </div>
  )
}
