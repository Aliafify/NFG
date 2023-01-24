import React from 'react';
import './socialMedia.css';
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa"

function SocialMedia() {
    const socials =[
            {name: 'twitter',icon:<FaTwitter color={'#fff'}/>,link:''},
            {name: 'facebook',icon:<FaFacebookF/>,link:''},
            {name: 'instagram',icon:<FaInstagram/>,link:''},
            {name:'youtube',icon:<FaYoutube/>,link:''}
          ]
  return (
    <>
    <div className='social-cont'>
     <nav>
        <ul>
        <h5>Official Channels</h5>
            {socials.map((s,i)=>
            <li className='social-item' key={i} >

                <a href={s.link} target='_blank'><i>{s.icon}</i> {s.name}</a>
                </li>)
                }
        </ul>
     </nav>
    </div>
    </>
  )
}

export default SocialMedia