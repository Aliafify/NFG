import React from 'react'
import {Contain,Col} from "../styled-components/index"
import "./subHero.css"
import subHeroImage from "../../assests/hero-bg.webp";
function SubHero() {
  return (
    <Contain height='400px' border='0px' perfix='subhero-cont'>
      <Col width='38%'  perfix='subh-content' border='0px' dir='column'>
          <ul>
            <h1>What NFG offer</h1>
            <li >Lorem Ipsum</li>
            <li className='secondColor'>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li className='secondColor'>Lorem Ipsum</li>

          </ul>
      </Col>
      <Col width='10%'></Col>
      <Col width='38%' perfix='subh-img'>
        <img className='sub-hero-img' src={subHeroImage}  alt='NFG- subheading image'/>
      </Col>
    </Contain>
  )
}

export default SubHero