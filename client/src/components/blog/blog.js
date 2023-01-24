import React, { useState } from 'react'
import Header from '../About/header'
import Post from './post';
import postImage from "../../icons/personal2.jpg";
import postImage1 from "../../icons/personal1.jpg";
import postImage2 from "../../icons/personal3.jpg";


import './blog.css';

function Blog({light}) {
    const trialPost = [
        {title:'How to Own Your Audience by Creating an Email List' , image:postImage,discription:'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:'3/4/1993',author:'ali afify',keyWords:'wordpress',},
        {title:'How to Own Your Audience by Creating an Email List' , image:postImage1,discription:'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b'},
        {title:'How to Own Your Audience by Creating an Email List' , image:postImage2,discription:'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b'}
        ,
    ]
    const [posts,setPost] =useState(trialPost);
  return (
    <>
<Header light={light} header={{word1:"my",word2:"blog",bgtitle:"post"}}/>

    <section className='posts'>
        {posts.map((p,i)=>
        
        <Post key={i} light={light} post={p}/>
        )}
    </section>
    </>
  )
}

export default Blog