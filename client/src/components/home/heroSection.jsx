import React from 'react'
import {Contain,Col} from '../styled-components/index.js'
import heroVideo from '../../assests/hero-video.mp4';
import heroImage from '../../assests/hero-bg.webp';
import "./heroSection.css";
import { FcMenu, FcOvertime } from "react-icons/fc";

function HeroSection() {
  return (
   
        <div className="hero-section">
          <div className='over-lay'>
            <Contain height='100%'>
              <Col width='40%' dir='column' align='flex-start'>
                <div className='heroContent'>
                <h1>
                  NFG - Header 
                </h1>
                <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                </p>
                </div>
                <button className='ctn'>Call To Action
                {/* <span> <FcOvertime/></span> */}
                  </button>
              </Col>
              <Col width='40%'></Col>
            </Contain>
          </div>
        <video id="background-video"  autoPlay muted  loop>
<source src={heroVideo} type="video/mp4" className='hero-vid-src'/>
</video>
</div>

    )
}

export default HeroSection