import React from 'react'
import Header from '../About/header'
import {BsFillPersonFill,BsCalendar2CheckFill,BsBookmarksFill} from 'react-icons/bs'

function PostData({post,light}) {
  return (
    <div className='datacont'>
<Header light={light} header={{word1:"my",word2:"post",bgtitle:"post"}}/>
        <div className='post-spans'>
            <span>
            <BsFillPersonFill color='#ffb400' style={{margin:'0 10 0 0'}}/>
           {post.author}
            </span>
            <span>
                <BsCalendar2CheckFill color='#ffb400' style={{margin:'0 10 0 0'}}/>
           {post.date}
            </span>
            <span>
                <BsBookmarksFill color='#ffb400' style={{margin:'0 10 0 0'}}/>
           {post.keyWords}
            </span>
        </div>
        <div>
            <h1 style={{position:'initial'}}>
                {post.title}
            </h1>
        <img width='100%'  src={post.image}/>
            <p>
                {post.content}
            </p>
        </div>
        </div>
  )
}

export default PostData